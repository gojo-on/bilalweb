require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs/promises');
const multer = require('multer');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const upload = multer({
  dest: path.join(__dirname, 'uploads'),
  limits: { fileSize: 5 * 1024 * 1024 }
});

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));

// Email transporter setup (Gmail)
const transporter = process.env.EMAIL_USER && process.env.EMAIL_PASS ? nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
}) : null;

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const emailTarget = process.env.EMAIL_TO || process.env.SENDGRID_TO_EMAIL || process.env.EMAIL_USER || 'latifkxanovabdulvoxid@gmail.com';
const useSendGrid = Boolean(process.env.SENDGRID_API_KEY);

async function ensureJsonFile(filePath) {
  try {
    await fs.access(filePath);
  } catch (err) {
    await fs.writeFile(filePath, JSON.stringify([], null, 2));
  }
}

async function appendToJson(filePath, item) {
  await ensureJsonFile(filePath);
  const content = await fs.readFile(filePath, 'utf8');
  const items = JSON.parse(content || '[]');
  items.push(item);
  await fs.writeFile(filePath, JSON.stringify(items, null, 2));
}

async function sendEmail(to, subject, text, attachments = []) {
  try {
    if (useSendGrid) {
      const msg = {
        to,
        from: process.env.SENDGRID_FROM_EMAIL || emailTarget,
        subject,
        text
      };
      await sgMail.send(msg);
      console.log('Email sent via SendGrid successfully');
      return;
    }

    if (!transporter) {
      console.warn('Email not sent: Gmail credentials not configured.');
      return;
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      attachments
    });
    console.log('Email sent via Gmail successfully');
  } catch (error) {
    console.error('Email send error:', error);
  }
}

app.post('/api/contact', upload.single('attachment'), async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const entry = {
      id: Date.now(),
      name,
      email,
      message,
      attachment: req.file ? req.file.filename : null,
      originalAttachmentName: req.file ? req.file.originalname : null,
      createdAt: new Date().toISOString()
    };

    await appendToJson(path.join(__dirname, 'data', 'messages.json'), entry);

    // Send email
    const emailText = `Yangi xabar:\n\nIsm: ${name}\nEmail: ${email}\nXabar: ${message}`;
    const attachments = req.file ? [{ filename: req.file.originalname, path: req.file.path }] : [];
    await sendEmail(emailTarget, 'Yangi kontakt xabari', emailText, attachments);

    return res.json({ success: true, message: 'Xabar muvaffaqiyatli yuborildi.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Serverda xatolik yuz berdi.' });
  }
});

app.post('/api/commission', upload.none(), async (req, res) => {
  try {
    const { name, email, projectType, description, budget, deadline } = req.body;
    if (!name || !email || !projectType || !description) {
      return res.status(400).json({ error: 'Name, email, project type and description are required.' });
    }

    const entry = {
      id: Date.now(),
      name,
      email,
      projectType,
      description,
      budget: budget || null,
      deadline: deadline || null,
      createdAt: new Date().toISOString()
    };

    await appendToJson(path.join(__dirname, 'data', 'orders.json'), entry);

    // Send email
    const emailText = `Yangi buyurtma:\n\nIsm: ${name}\nEmail: ${email}\nLoyiha turi: ${projectType}\nTavsif: ${description}\nByudjet: ${budget || 'Kiritilmagan'}\nMuddat: ${deadline || 'Kiritilmagan'}`;
    await sendEmail(emailTarget, 'Yangi buyurtma', emailText);

    return res.json({ success: true, message: 'Buyurtma muvaffaqiyatli yuborildi.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Serverda xatolik yuz berdi.' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
