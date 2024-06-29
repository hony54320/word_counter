import inquirer from "inquirer";
async function wordCount() {
    let count = 0;
    let { text } = await inquirer.prompt([{
            name: 'text',
            message: 'Enter Text',
            type: 'input',
        }]);
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            count++;
        }
    }
    count++;
    console.log('You Entered', text);
    console.log('Word Count:', count);
}
wordCount();
