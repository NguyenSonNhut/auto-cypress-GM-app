const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    animationDistanceThreshold: 5,
arch: 'x64',
baseUrl: null,
blockHosts: String,
browsers: [
{
name: 'chrome',
family: 'chromium',
channel: 'stable',
displayName: 'Chrome',
version: '125.0.6422.112',
path: 'C:\Program Files\Google\Chrome\Application\chrome.exe',
minSupportedVersion: 64,
majorVersion: '125',
},
{
name: 'edge',
family: 'chromium',
channel: 'stable',
displayName: 'Edge',
version: '125.0.2535.67',
path: 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
minSupportedVersion: 79,
majorVersion: '125',
},
{
name: 'electron',
channel: 'stable',
family: 'chromium',
displayName: 'Electron',
version: '118.0.5993.159',
path: '',
majorVersion: 118,
},
],
chromeWebSecurity: true,
clientCertificates: [],
defaultCommandTimeout: 4000,
downloadsFolder: 'cypress/downloads',
env: {},
excludeSpecPattern: '*.hot-update.js',
execTimeout: 60000,
experimentalCspAllowList: false,
experimentalFetchPolyfill: false,
experimentalInteractiveRunEvents: false,
experimentalMemoryManagement: false,
experimentalModifyObstructiveThirdPartyCode: false,
experimentalOriginDependencies: false,
experimentalRunAllSpecs: false,
// experimentalSingleTabRunMode: false,
experimentalSkipDomainInjection: null,
experimentalSourceRewriting: false,
experimentalStudio: false,
experimentalWebKitSupport: false,
fileServerFolder: '',
fixturesFolder: 'cypress/fixtures',
hosts: null,
includeShadowDom: false,
isInteractive: true,
keystrokeDelay: 0,
modifyObstructiveCode: true,
numTestsKeptInMemory: 50,
pageLoadTimeout: 60000,
platform: 'win32',
port: null,
projectId: null,
redirectionLimit: 20,
reporter: 'spec',
reporterOptions: null,
requestTimeout: 5000,
resolvedNodePath: null,
resolvedNodeVersion: null,
responseTimeout: 30000,
retries: {
runMode: 0,
openMode: 0,
},
screenshotOnRunFailure: true,
screenshotsFolder: 'cypress/screenshots',
scrollBehavior: 'top',
slowTestThreshold: 10000,
specPattern: 'auto-cypress-app/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
supportFile: false,
supportFolder: false,
taskTimeout: 60000,
testIsolation: true,
trashAssetsBeforeRuns: true,
userAgent: null,
video: false,
videoCompression: false,
videosFolder: 'cypress/videos',
viewportHeight: 660,
viewportWidth: 1000,
waitForAnimations: true,
watchForFileChanges: true,
  },
});