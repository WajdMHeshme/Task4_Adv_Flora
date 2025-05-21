import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1500, // مدة الأنيميشن بالميلي ثانية
  once: true,     // الأنيميشن يحدث مرة واحدة فقط
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
