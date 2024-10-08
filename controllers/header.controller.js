// 1. You should provide your own project, not the example URL.
// 2. A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.
// 3. A request to /api/whoami should return a JSON object with your preferred language in the language key.
// 4. A request to /api/whoami should return a JSON object with your software in the software key.

// Example Output:

// {"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",
// "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}

const responseUserAgent = (req, res) => {
    let ipAdress = req.ip;

    let language = req.headers['accept-language'];

    let software = req.headers['user-agent'];

    res.json({
        ipaddress: ipAdress,
        language: language,
        software: software
    });
}

module.exports = responseUserAgent;