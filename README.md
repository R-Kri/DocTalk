# DocTalk - Real-Time AI Medical Voice Agent

heyyyyyyyy

A comprehensive AI-powered medical voice assistant built with Next.js 14, featuring real-time voice interactions, symptom tracking, and HIPAA-compliant data handling.

## 🚀 Features

- **🎤 Real-time Voice Interactions**: Powered by Vapi/AssemblyAI for seamless voice communication
- **🤖 AI Medical Assistant**: OpenRouter integration with GPT-3.5-turbo for intelligent responses
- **📊 Symptom Tracking**: Comprehensive symptom logging and severity tracking
- **📋 Medical Reports**: AI-generated medical reports from conversation data
- **🌙 Dark/Light Mode**: Complete theme system with user preferences
- **🔐 Authentication**: Secure user management with Clerk
- **💾 Database**: PostgreSQL with Drizzle ORM for robust data storage
- **📈 Analytics**: Built-in event tracking and performance monitoring
- **📱 PWA Support**: Installable progressive web app
- **🏥 HIPAA Compliance**: Security measures for medical data protection

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Drizzle ORM
- **Database**: PostgreSQL (Neon)
- **Authentication**: Clerk
- **AI Services**: OpenRouter (GPT-3.5-turbo), Vapi/AssemblyAI
- **Voice**: Vapi Web SDK
- **Testing**: Jest, React Testing Library
- **Deployment**: Docker, Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Clerk account
- OpenRouter API key

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd doctalk
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp env.example .env.local
```

Fill in your environment variables:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/doctalk"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
OPENROUTER_API_KEY="sk-or-v1-..."
VAPI_API_KEY="your_vapi_api_key"
ASSEMBLY_AI_KEY="your_assembly_ai_key"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. **Set up the database:**
```bash
npm run db:push
```

5. **Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
npm run db:push      # Push database schema
npm run db:studio    # Open Drizzle Studio
```

## 📁 Project Structure

```
doctalk/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (routes)/          # Main application routes
│   └── api/               # API endpoints
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── medical/          # Medical-specific components
│   └── ui/               # Reusable UI components
├── config/               # Configuration files
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── types/                # TypeScript type definitions
├── __tests__/            # Test files
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose setup
└── .github/workflows/    # CI/CD pipelines
```

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/session-chat` | POST/GET | Create/manage chat sessions |
| `/api/suggest-doctors` | POST | Get AI doctor suggestions |
| `/api/voice/transcribe` | POST | Voice transcription |
| `/api/medical-report` | POST | Generate medical reports |
| `/api/analytics` | POST/GET | Track analytics events |

## 🧪 Testing

**Run the test suite:**
```bash
npm run test
```

**Run tests with coverage:**
```bash
npm run test:coverage
```

**Run tests in watch mode:**
```bash
npm run test:watch
```

## 🚀 Deployment

### Docker

**Build and run with Docker:**
```bash
docker build -t doctalk .
docker run -p 3000:3000 doctalk
```

### Docker Compose

**For local development with PostgreSQL:**
```bash
docker-compose up
```

### Vercel

**Deploy to Vercel:**
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

**Build for production:**
```bash
npm run build
npm run start
```

## 🔒 Security & Compliance

- **🔐 Authentication**: Clerk-based user authentication
- **⚡ Rate Limiting**: API endpoint protection
- **🔒 Data Encryption**: Secure data transmission
- **🏥 HIPAA Considerations**: Medical data handling best practices
- **✅ Input Validation**: Zod-based request validation
- **🛡️ Security Headers**: HSTS, XSS protection, Content-Type options

## 📊 Monitoring & Analytics

- **📈 Event Tracking**: User interaction analytics
- **⚡ Performance Monitoring**: Response time tracking
- **🔍 Error Logging**: Centralized error handling
- **📋 Medical Events**: Symptom and session tracking
The application includes comprehensive analytics:
- Session tracking and duration
- Voice interaction metrics
- Error monitoring and reporting
- Performance metrics
- User engagement analytics

## 🎯 API Endpoints

### Authentication
- `POST /api/users` - Create/retrieve user

### Sessions
- `POST /api/session-chat` - Create new session
- `GET /api/session-chat?sessionId={id}` - Get session details
- `GET /api/session-chat?sessionId=all` - Get all user sessions

### Medical
- `POST /api/suggest-doctors` - Get AI doctor suggestions
- `POST /api/medical-report` - Generate medical report

### Voice
- `POST /api/voice/transcribe` - Transcribe audio to text

### Analytics
- `POST /api/analytics` - Track events
- `GET /api/analytics` - Get analytics data

## 🔧 Configuration

### Voice Settings
Configure voice interaction parameters in the app:
- Language selection
- Speech rate adjustment
- Volume control
- Noise reduction settings

### Theme Configuration
The app supports system-aware theming:
- Light mode
- Dark mode
- System preference detection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Use semantic commit messages
- Ensure HIPAA compliance for medical features
- Add JSDoc comments for functions

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**Database Connection Issues**
- Verify DATABASE_URL is correct
- Check Neon DB connection status
- Ensure IP is whitelisted (if applicable)

**Authentication Problems**
- Verify Clerk keys are correct
- Check domain configuration in Clerk dashboard
- Ensure NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is set

**Voice Features Not Working**
- Check microphone permissions
- Verify VAPI_API_KEY or ASSEMBLY_AI_KEY
- Test in HTTPS environment (required for microphone access)

**Build Errors**
- Clear `.next` folder and rebuild
- Check for TypeScript errors
- Verify all environment variables are set

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review the API documentation

## 🔮 Roadmap

- [ ] Offline mode support
- [ ] Multi-language support
- [ ] Advanced voice commands
- [ ] Integration with EHR systems
- [ ] Telemedicine video calls
- [ ] Prescription management
- [ ] Appointment scheduling
- [ ] Health data visualization
- [ ] Mobile app (React Native)
- [ ] AI model fine-tuning

---

**⚠️ Medical Disclaimer**: This application is for informational purposes only and should not replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical concerns.