const highlightJS = document.querySelectorAll('pre.syntax-highlighted.js');

const javascriptSyntax = {
    expressions: {
        'functions': /\b([\w]+)\s*\(/gm,
        'keyTermsHard': /\b(if|then|else|for|while|do|class|function|return|in|of|new|this|try|catch|const|let|var)\b/gi,
        'keyTermsSoft': /\b(true|false|null|nil|class|implements|extends|end|void|return|in|of|new|this|try|catch|def|except)\b/gi,
        'comments': /(?:^|[^\\])(\/\/.*)$|\/\*[\s\S]*?\*\//gm,
        'classNames': /\s[A-Z]\w*/g,
        'number': /[\b\W](-?\d+)\b/g,
        'punctuationSoft': /[[\](){}:]+|(?<!&\w*);/g,
        'punctuationHard': /[\+\*!|?]|(&gt;|&lt;|&amp;)|\B=\B|=(?!")/g,
        'strings': /"(?:[^"\\]|\\.)*"|('(?:[^'\\]|\\.)*')|`(?:[^`\\]|\\.)*`/g
    },
    classes: {
        'functions': 'fn',
        'keyTermsHard': 'hard',
        'keyTermsSoft': 'soft',
        'comments': 'comment',
        'classNames': 'class',
        'number': 'int',
        'punctuationSoft': 'soft',
        'punctuationHard': 'hard',
        'strings': 'string'
    },
    parseChar: (html, type) => {
        return html.replaceAll(javascriptSyntax.expressions[type],
            `<span class="sh-${javascriptSyntax.classes[type]}">$&</span>`);
    },
    parse: (sample) => {
        const parseString = sample.innerText;
        let html = sample.innerHTML;

        new Set(parseString.match(javascriptSyntax.expressions.comments))
            .forEach(match => {
                html = html.replaceAll(match,
                    `<span class="sh-comment">$&</span>`);
            });

        new Set(parseString.match(javascriptSyntax.expressions.strings))
            .forEach(match => {
                html = html.replaceAll(match,
                    `<span class="sh-string">$&</span>`);
            });

        new Set(parseString.match(javascriptSyntax.expressions.keyTermsHard))
            .forEach(match => {
                html = html.replaceAll(new RegExp(`\\b(${match})\\b`, 'g'),
                    `<span class="sh-hard">$&</span>`);
            });

        new Set(parseString.match(javascriptSyntax.expressions.classNames))
            .forEach(match => {
                html = html.replaceAll(match,
                    `<span class="sh-class">$&</span>`);
            })

        new Set(parseString.match(javascriptSyntax.expressions.functions))
            .forEach(match => {
                html = html.replaceAll(match,
                    `<span class="sh-fn">${match.slice(0, -1)}</span>(`);
            });

        html = javascriptSyntax.parseChar(html, 'number');

        html = javascriptSyntax.parseChar(html, 'punctuationHard');

        html = javascriptSyntax.parseChar(html, 'punctuationSoft');

        return html;
    }
};

highlightJS.forEach(sample => {
    sample.innerHTML = javascriptSyntax.parse(sample);
});