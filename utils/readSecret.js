const fs = require('fs');

// Read a secret from the file at `${name}_FILE` (Docker secrets), falling back to `${name}`.
const readSecret = (name) => {
    const filePath = process.env[`${name}_FILE`];
    if (!filePath) return process.env[name];

    try {
        return fs.readFileSync(filePath, 'utf8').trim();
    } catch (error) {
        throw new Error(`Could not read ${name}_FILE (${filePath}): ${error.code || error.message}`);
    }
};

module.exports = readSecret;
