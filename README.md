# 🌟 Handoff Mobile App Testing Project

## 📱 Overview
Automated testing suite for the Handoff mobile application using WebdriverIO and UiSelector for Android. This project implements a comprehensive test framework for critical business flows, ensuring application reliability and quality.

## 🛠️ Technology Stack
- **WebdriverIO**: Core testing framework
- **UiSelector**: Android element selection
- **JavaScript**: Programming language
- **Dotenv**: Environment configuration
- **Page Object Model**: Design pattern

## 📂 Project Structure
```
handoff-automation/
├── test/
│ ├── pageobjects/
│ │ ├── login.page.js
│ │ ├── estimate.page.js
│ │ └── proposal.page.js
│ └── specs/
│ ├── login.spec.js
│ ├── estimate.spec.js
│ └── sendProposal.spec.js
├── .env
├── package.json
├── wdio.conf.js
└── README.md
```

## 🔑 Key Features
- Login authentication
- Estimate creation and management
- Proposal generation and sending
- Email integration testing
- Client search functionality
- Service selection validation

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Android SDK
- Connected Android device or emulator
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/rxdrigoquadros/handoff-automation.git
cd handoff-automation
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your credentials
```

### Running Tests
- Run all tests:
```bash
npm test
```

- Run specific test suite:
```bash
npm test -- --spec ./test/specs/sendProposal.spec.js
```

## 📋 Test Suites

### Login Flow (`login.spec.js`)
- Authentication with phone number
- SMS verification
- Session validation

### Estimate Creation (`estimate.spec.js`)
- Client selection
- Service selection
- Estimate review process
- Validation steps

### Proposal Management (`sendProposal.spec.js`)
- Proposal creation from estimate
- Client search functionality
- Email sending process
- Status verification

## 🔍 Page Objects

### `login.page.js`
Handles authentication-related elements and actions:
- Phone number input
- SMS code verification
- Login button interactions

### `estimate.page.js`
Manages estimate creation elements and actions:
- Client selection
- Service selection
- Estimate review
- Validation methods

### `proposal.page.js`
Controls proposal-related elements and actions:
- Proposal creation
- Preview functionality
- Sending mechanisms
- Status validation

## 🔧 Configuration

### Environment Variables
```env
PHONE_NUMBER=your_phone_number
SMS_CODE=verification_code
BASE_URL=app_base_url
```

### WebdriverIO Configuration
Key configurations in `wdio.conf.js`:
- Android capabilities
- Test timeout settings
- Reporter configuration
- Hook implementations

## 📊 Test Reports
Test reports are generated automatically after each test run:
- Detailed test execution logs
- Pass/Fail statistics
- Error screenshots
- Execution time metrics

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ✅ Best Practices
- Use Page Object Model pattern
- Maintain clear test descriptions
- Implement proper error handling
- Add appropriate validations
- Keep tests independent
- Use meaningful variable names
- Document complex test scenarios