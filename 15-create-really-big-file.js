const { writeFileSync } = require('fs');

for (let i = 0; i < 1e5; i++) {
    writeFileSync(
        './content/really-big-file.txt', 
        `
        Apofa, You Are Great And Awesome YAH!
        `,
        { flag: 'a' }
    );
}