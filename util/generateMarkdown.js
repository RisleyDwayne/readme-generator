const licenseBadgeList = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "Apache 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GNU v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "BSD 3-Clause": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
}

function generateMarkdown(data) {

    // set url for license badge
    data.licenseBadge = licenseBadgeList[data.license];

    // markdown content
    return `# ${data.title}
${data.licenseBadge}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install dependencies, run the following:
\`
${data.installation}
\`
## Usage
${data.usage}
## License
This repository is licensed under the ${data.license} license.
## Contributing
${data.contribute}
## Tests
To run tests, run the following:
\`
${data.tests}
\`
## Questions
Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}). View more of my work on GitHub at [${data.user}](https://github.com/${data.user}) 
`;
}

module.exports = generateMarkdown;