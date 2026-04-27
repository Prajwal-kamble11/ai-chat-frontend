# 🎨 AMI AI - Modern RAG Chat Interface

The frontend for the AMI AI Assistant—a sleek, dark-themed **React** application designed for speed, beauty, and powerful document-based conversations.

---

## ✨ Features

- **Dynamic Chat Experience**: Real-time streaming responses with a refined, message-by-message animation.
- **Knowledge Base Management**: Upload PDFs or Text files directly through the interface to give the AI "long-term memory."
- **Premium Aesthetics**: Built with **Tailwind CSS** and **Framer Motion** for glassmorphic effects, smooth transitions, and a premium "Pro" feel.
- **Secure Auth Flow**: Custom-built Login and Signup systems with persistent session management via JWT.
- **Responsive Dashboard**: Optimized for both desktop and mobile users.
- **Smart Feedback**: Integrated Toast notifications for real-time success/error feedback during file uploads or login attempts.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## ⚙️ Setup Instructions

### 1. Installation
```bash
git clone https://github.com/your-username/ai-chat-frontend.git
cd ai-chat-frontend/frontend
npm install
```

### 2. Environment Variables
Create a `.env` file in the `frontend` folder:
```env
VITE_API_URL=http://localhost:8000
```
*Note: For production, replace this with your Render backend URL.*

### 3. Run Locally
```bash
npm run dev
```

---

## 🚀 Deployment (Vercel)

1. Connect your repository to Vercel.
2. Ensure the **Root Directory** is set to `frontend` (if applicable).
3. Set the **Framework Preset** to Vite.
4. **Environment Variables**: Add `VITE_API_URL` pointing to your live backend.
5. Add a `vercel.json` for SPA routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 📄 License
MIT License. Created by [Your Name].
