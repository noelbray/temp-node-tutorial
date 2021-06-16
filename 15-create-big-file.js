const { writeFileSync } = require('fs');

for (let i = 0; i < 1e4; i++) {
    writeFileSync(
        './content/big.txt', 
        `
        Apofa, You Are Great And Awesome YAH!
        `,
        { flag: 'a' }
    );
}