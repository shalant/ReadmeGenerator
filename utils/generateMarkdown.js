function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ## Description:
  ### ${data.description}
  #### ![license image](https://img.shields.io/badge/License-${data.license}-color=orange.svg)
  ## Table of Contents:
  ###     [1. Installation](#Installation)
  ###     [2. Usage](#Usage)
  ###     [3. License](#License)
  ###     [4. Contributing](#Contributing)
  ###     [5. Testing](#Tests)
  ###     [6. Questions](#Questions)

  ### 1. Installation
  #### ${data.installation}

  ### 2. Usage
  #### ${data.usage}

  ### 3. License
  #### ${data.license[0] || null}
  #### This application is licensed by:
  #### ![license image](https://img.shields.io/badge/License-${data.license}-color=orange.svg)

  ### 4. Contributing
  #### ${data.contributing}

  ### 5. Tests
  #### ${data.tests}

  ### 6. Questions
  #### With any questions send an e-mail to ${data.questions}
  #### Visit https://github.com/${data.githubUsername}

`;
}

module.exports = generateMarkdown;
