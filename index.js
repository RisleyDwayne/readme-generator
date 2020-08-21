const generateMarkdown = require("./util/generateMarkdown");

// instantiate ReadMe generator object
const ReadMeGen = require("./util/readmegen");

const init = async () => {

    const generator = new ReadMeGen();
    try {
        console.log("Welcome to the README generator.\nPlease answer the following questions:")

        const answers = await generator.prompt();

        // create markdown
        const fileContent = generateMarkdown(answers);

        // write markdown to README.md
        await generator.generateFile("./output/README.md", fileContent);

        console.log("README.md created in output folder.");

    } catch (err) {
        console.error("Error creating README. File not created.");
        console.log(err);
    }
}

init();