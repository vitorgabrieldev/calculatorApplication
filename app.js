



function renderCalc(number) {
    functionCalc.renderNumber(number);
};

window.addEventListener('keypress', (e) => {
    if(/^[0-9]*$/.test(e.key)) {
        renderCalc(e.key);
    };
    switch(e.key) {
        case '+':
            functionCalc.sum();
            break;
        case '-':
            functionCalc.sub();
            break;
        case '*':
            functionCalc.multi();
            break;
        case '/':
            functionCalc.div();
            break;
        case 'Enter':
            functionCalc.res();
            break;
    };
});

// Histoy Numbers
var NDP = ''; // Number Display Primary
var NDS = ''; // Number Display Secondary
var tokenOperator;

let displayPrimary = document.querySelector('.currentInput');
let displaySecondary = document.querySelector('.answerScreen');


const functionCalc = {
    renderNumber: function(data) {
        if(NDP.length <= 10) {
            NDP = NDP + data;
            displayPrimary.innerHTML = NDP;
        };
    },
    sum: function() {
        
        console.log(NDP);
        console.log(NDS);
        console.log(tokenOperator);

        if(NDP.length && !NDS.length) {
            displaySecondary.innerHTML = NDP;
            displayPrimary.innerHTML = "";
            NDS = NDP;
            NDP = '';
            tokenOperator = 'sum';
        };
    },
    sub: function() {
        if(NDP.length && !NDS.length) {
            displaySecondary.innerHTML = NDP;
            displayPrimary.innerHTML = "";
            NDS = NDP;
            NDP = '';
            tokenOperator = 'sub';
        };
    },
    multi: function() {
        if(NDP.length && !NDS.length) {
            displaySecondary.innerHTML = NDP;
            displayPrimary.innerHTML = "";
            NDS = NDP;
            NDP = '';
            tokenOperator = 'multi';
        };
    }, 
    div: function() {
        if(NDP.length && !NDS.length) {
            displaySecondary.innerHTML = NDP;
            displayPrimary.innerHTML = "";
            NDS = NDP;
            NDP = '';
            tokenOperator = 'div';
        };
    },
    res: function() {
        if(NDP.length && NDS.length) {
            switch(tokenOperator) {
                case 'sum':
                    NDP = parseInt(NDS) + parseInt(NDP);
                    displayPrimary.innerHTML = NDP;
                    displaySecondary.innerHTML = "0";
                    NDS = "";
                    tokenOperator = "";
                    NDP = NDP.toString();
                    break;
                case 'sub':
                    NDP = parseInt(NDS) - parseInt(NDP);
                    displayPrimary.innerHTML = NDP;
                    displaySecondary.innerHTML = "0";
                    NDS = "";
                    tokenOperator = "";
                    NDP = NDP.toString();
                    break;
                case 'multi':
                    NDP = parseInt(NDS) * parseInt(NDP);
                    displayPrimary.innerHTML = NDP;
                    displaySecondary.innerHTML = "0";
                    NDS = "";
                    tokenOperator = "";
                    NDP = NDP.toString();
                    break;
                case 'div':
                    NDP = parseInt(NDS) / parseInt(NDP);
                    displayPrimary.innerHTML = NDP;
                    displaySecondary.innerHTML = "0";
                    NDS = "";
                    tokenOperator = "";
                    NDP = NDP.toString();
                    break;
            };
        };
    },
    clean: function() {
        // --- * --- ResetCalc Info --- * ---
        NDP = "";
        NDS = "";
        tokenOperator = "";
        displayPrimary.innerHTML = "";
        displaySecondary.innerHTML = "0";
    },
};