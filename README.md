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
### Environment Variables
```env
# App-specific configuration
PLATFORM_NAME=Android
DEVICE_NAME=YOUR_EMULATOR_NAME
APP_PACKAGE=com.apppackage
APP_ACTIVITY=MainActivity
AUTOMATION_NAME=UiAutomator2
NEW_COMMAND_TIMEOUT=240
NO_RESET=true
FULL_CONTEXT_LIST=true

# Login credentials for test
PHONE_NUMBER=1324567890
SMS_CODE=000000

# Onboarding signup email
ONBOARDING_EMAIL=address@email.com

# Browserstack credentials for test
BROWSERSTACK_USERNAME=bs-login
BROWSERSTACK_ACCESS_KEY=bs-access-key
BROWSERSTACK_APP_ID=bs://appip
```

## 🔧 Configuration
- Install Appium
```
npm i --location=global appium
```
- Install the UiAutomator2 Driver
```
appium driver install uiautomator2
```
- Create your .env file
- Create a Android emulator in the Android Studio
- Get the emulator name with command
```
emulator -list-avds
```
- Set your emulator name and API version in the wdio.conf.js
- Put APK in app folder
```
handoff-automation/
└── app/
  └── handoff.apk
```
- Run Appium in the terminal with command
```
appium
```
- Install project dependencies with command
```
npm i
```

### Running Tests
- Run all tests:
```bash
npm run test
```

- Run specific test suite:
```bash
npx wdio run wdio.conf.js --spec ./test/specs/TESTNAME.spec.js  
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
