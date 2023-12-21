'use strict'


const account1 = {
    owner: 'Mustafa Ali',
    transactions: [4000, -50, 100, 300, -350, 1500, -500, 900, 300, -2000],
    interestRate: 0.2,
    pin: 1234,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account2 = {
    owner: 'Noha Abdelaal',
    transactions: [3300, -300, -100, -500, -600, 1200, -800, 900, -550, 100],
    interestRate: 0.2,
    pin: 1111,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account3 = {
    owner: 'Ali Sayed',
    transactions: [8000, -3500, -2500, -600, 350, 750. - 200, -600, -1600, 200],
    interestRate: 0.2,
    pin: 2222,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account4 = {
    owner: 'Yusuf Sobhy',
    transactions: [3000, -300, -600, -800, 950, 1250, -2000, 1750, 1950, 200],
    interestRate: 0.2,
    pin: 3333,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account5 = {
    owner: 'Mohamed Mamdouh',
    transactions: [16500, -3500, -5750, -950, 1300, 200, 1200, -6850, -150, 2000],
    interestRate: 0.2,
    pin: 4444,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account6 = {
    owner: 'Michael Maher',
    transactions: [2500, -100, -350, -850, -600, 1500, 250, 650, -750, -250],
    interestRate: 0.2,
    pin: 5555,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account7 = {
    owner: 'Ahmed Saleh',
    transactions: [3500, -650, -750, -350, -450, 200, 1600, 350, -300, -200],
    interestRate: 0.2,
    pin: 6666,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account8 = {
    owner: 'Vanessa Kissinger',
    transactions: [5000, -350, -650, 200, 150, 350, -950, -1050, 300, 200],
    interestRate: 0.2,
    pin: 7777,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account9 = {
    owner: 'Ahmed Aman',
    transactions: [3500, -250, -300, -650, 200, 150, 350, -900, -1100, 500],
    interestRate: 0.2,
    pin: 8888,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account10 = {
    owner: 'Tiana',
    transactions: [4000, -50, 100, 300, -350, 1500, -500, 900, 300, -2000],
    interestRate: 0.2,
    pin: 9999,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account11 = {
    owner: 'Asma Tlili Ep Ben Fraj',
    transactions: [4000, -50, 100, 300, -350, 1500, -500, 900, 300, -2000],
    interestRate: 0.2,
    pin: 1212,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account12 = {
    owner: 'Anna',
    transactions: [4000, -50, 100, 300, -350, 1500, -500, 900, 300, -2000],
    interestRate: 0.2,
    pin: 1313,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account13 = {
    owner: 'Yusuf Jo',
    transactions: [4000, -50, 100, 300, -350, 1500, -500, 900, 300, -2000],
    interestRate: 0.2,
    pin: 1414,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account14 = {
    owner: 'Vlad',
    transactions: [4000, -50, 100, 300, -350, 1500, -500, 900, 300, -2000],
    interestRate: 0.2,
    pin: 1515,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}
const account15 = {
    owner: 'Kholoud Hasan',
    transactions: [4000, -50, 100, 300, -350, 1500, -500, 900, 300, -2000],
    interestRate: 0.2,
    pin: 1616,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account16 = {
    owner: 'Fayed Ahmed',
    transactions: [4000, -50, 100, 300, -350, 1500, -500, 900, 300, -2000],
    interestRate: 0.2,
    pin: 1717,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account19 = {
    owner: 'Tester',
    transactions: [4000, -50, 100, 300, -350, 1500, -500, 900, 300, -2000],
    interestRate: 0.2,
    pin: 1010,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const account20 = {
    owner: 'Test',
    transactions: [4000, -50, 100, 300, -350, 1500, -500, 900, 300, -2000],
    interestRate: 0.2,
    pin: 2424,

    transDates:
        [
            "2023-01-18T21:31:17.178Z",
            "2023-02-23T07:42:02.383Z",
            "2023-03-28T09:15:04.904Z",
            "2023-04-01T10:17:24.185Z",
            "2023-05-08T14:11:59.604Z",
            "2023-06-26T17:01:17.194Z",
            "2023-07-28T23:36:17.929Z",
            "2023-08-01T22:49:16.790Z",
            "2023-09-26T16:30:40.790Z",
            "2023-10-11T08:04:18.790Z",
        ],
}

const accounts = [account1, account2, account3, account4, account5, account6, account7, account8, account9, account10, account11, account12, account13, account14, account19, account20];

let currentAccount, balance;


/*      Creating Balance         */
accounts.forEach(acc => acc.balance = Number(acc.transactions.reduce((acc, trans) => acc + trans)));



/*      creating username   */

accounts.forEach(function (acc) {
    acc.username = acc.owner.split(' ').at(0);
})

/*an array with all usernames upper- and lowercase*/
let allUsers = accounts.flatMap(function (acc) {
    return [acc.username, `${acc.username.at(0).toLowerCase()}${acc.username.slice(1)}`];
});



/* Transactions: */

const transContainer = document.querySelector('.transactions');
const balanceEl = document.querySelector('.balance__amount');

const displayTrans = function (acc) {
    /* remove old contect */
    transContainer.innerHTML = '';

    /* insert new transactions */
    acc.transactions.forEach(function (trans, i) {
        const type = trans > 0 ? 'deposit' : 'withdraw';
        const options = {
            minute: 'numeric',
            hour: 'numeric',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }

        const html = `
        <div class="trans trans--${type}">
            <div class="trans__info">
                <div class="trans__icone trans__icone--${type}">${type}</div>
                <div>${new Intl.DateTimeFormat('en-GB', options).format(new Date(acc.transDates.at(i)))}</div>
            </div>
            <p class="trans__amount">${trans}</p>
        </div>`

        transContainer.insertAdjacentHTML('afterbegin', html);
    })
}


/* Calculating the Balance, Deposit, Withdraws and Interest  */
const displaySummery = function (acc) {

    const depositEl = document.querySelector('.footer__value--deposit')
    const withdrawEl = document.querySelector('.footer__value--withdraw')
    const interestEl = document.querySelector('.footer__value--interest')

    balance = currentAccount.balance;


    balanceEl.textContent = balance + '€';

    const deposit = acc.transactions.filter(trans => trans > 0).reduce((acc, trans) => acc + trans);
    depositEl.textContent = deposit + '€';

    const withdraw = acc.transactions.filter(trans => trans < 0).reduce((acc, trans) => acc + trans);
    withdrawEl.textContent = withdraw + '€';

    const interest = deposit * acc.interestRate;
    interestEl.textContent = interest + '€';
}


/*      Timer Logout        */

const timerEl = document.querySelector('.footer__time');
let timer = 300;

const logoutTimer = function () {

    const countdown = setInterval(function () {
        timer--;

        timerEl.textContent = new Intl.DateTimeFormat('en-GB', { minute: 'numeric', second: 'numeric' }).format(new Date(timer * 1000));

        if (timer === 0) {
            location.reload();
        }
    }, 1000)
}



/*          Login               */
const footer = document.querySelector('footer');
const userBtn = document.querySelector('#username');
const pinBtn = document.querySelector('#pin');
const loginBtn = document.querySelector('.loginBtn');
const main = document.querySelector('main');
const greeting = document.querySelector('.nav__greetings');
const owner = document.querySelector('.nav__owner');
const timeStamp = document.querySelector('.balance__time');



const login = function () {
    currentAccount = accounts.find(acc => acc.username === userBtn.value || acc.username === `${userBtn.value.at(0).toUpperCase()}${userBtn.value.slice(1)}`);

    if (currentAccount?.pin === Number(pinBtn.value)) {
        main.style.opacity = 1;
        owner.innerHTML = currentAccount.owner
        greeting.style.opacity = 1;
        footer.style.opacity = 1;
        userBtn.value = '';
        pinBtn.value = '';
        pinBtn.blur();

        /* Time Stamp */
        const now = new Date();
        const options = {
            weekday: 'short',
            minute: 'numeric',
            hour: 'numeric',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }

        timeStamp.textContent = new Intl.DateTimeFormat('en-GB', options).format(now);


        displayTrans(currentAccount);
        displaySummery(currentAccount);
        logoutTimer();
    }
    else alert('PIN or Username is wrong');
};

loginBtn.addEventListener('click', login);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') login();
});










/*      Transferring Money      */
const transferId = document.querySelector('.transfer__id');
const transferAmount = document.querySelector('.transfer__amount');
const transferBtn = document.querySelector('.transfer__btn');

transferBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (Number(transferAmount.value) > 0 && allUsers.includes(transferId.value) && currentAccount.balance >= transferAmount.value && currentAccount.username !== transferId.value.at(0).toUpperCase() + transferId.value.slice(1)) {

        /* add the amount the transactions array with minus and update the balance */
        currentAccount.transactions.push(Number(`-${transferAmount.value}`));
        currentAccount.transDates.push(new Date());
        balance = Number(currentAccount.transactions.reduce((acc, trans) => acc + trans))
        balanceEl.textContent = balance + '€';

        /* create new withdraw transaction */

        const options = {
            minute: 'numeric',
            hour: 'numeric',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }

        const transferTrans = `
        <div class="trans trans--withdraw">
            <div class="trans__info">
                <div class="trans__icone trans__icone--withdraw">withdraw</div>
                <div>${new Intl.DateTimeFormat('en-GB', options).format(new Date())}</div>
            </div>
            <p class="trans__amount">${transferAmount.value}</p>
        </div>`;
        transContainer.insertAdjacentHTML('afterbegin', transferTrans);

        /* find and add the money to the recipient */
        accounts.find(function (acc) {
            return acc.username === transferId.value.at(0).toUpperCase() + transferId.value.slice(1);
        }).transactions.push(Number(transferAmount.value));

        transferId.value = '';
        transferAmount.value = '';
        transferAmount.blur();
    }
    else alert('Incorrect amount or ID')
})

/*          requisting a loan       */

const loanAmount = document.querySelector('.loan__amount');
const loanBtn = document.querySelector('.loan__btn');

loanBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (loanAmount.value > 0 && loanAmount.value <= 1000) {

        setTimeout(function () {
            /* add the amount the transactions array and update the balance */
            currentAccount.transactions.push(Number(loanAmount.value));
            currentAccount.transDates.push(new Date());
            balance = Number(currentAccount.transactions.reduce((acc, trans) => acc + trans))
            balanceEl.textContent = balance + '€';

            /* create a new deposit transaction */

            const options = {
                minute: 'numeric',
                hour: 'numeric',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }

            const loanTrans = `
        <div class="trans trans--deposit">
            <div class="trans__info">
                <div class="trans__icone trans__icone--deposit">deposit</div>
                <div>${new Intl.DateTimeFormat('en-GB', options).format(new Date())}</div>
            </div>
            <p class="trans__amount">${loanAmount.value}</p>
        </div>`;
            transContainer.insertAdjacentHTML('afterbegin', loanTrans);

            loanAmount.value = '';
            loanAmount.blur();
        }, 2000);
    }

    else alert('The amount is incorrect or more than 1000')
})



/*              closing the account         */
const closeID = document.querySelector('.close__id');
const closePIN = document.querySelector('.close__pin');
const closeBtn = document.querySelector('.close__btn');

closeBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (currentAccount.username === closeID.value.at(0).toUpperCase() + closeID.value.slice(1)
        && currentAccount.pin === Number(closePIN.value)
    ) {
        const index = accounts.findIndex(acc => acc.pin === Number(closePIN.value));

        accounts.splice(index, 1);
        main.style.opacity = 0;
        greeting.style.opacity = 0;
        footer.style.opacity = 0;

        closeID.value = '';
        closePIN.value = '';
        closePIN.blur();
    }

    else alert("User's ID or PIN are incorrect");
})


/*          Sorting         */
const sortBtn = document.querySelector('.sortBtn');
let sorting = false;

sortBtn.addEventListener('click', function (e) {
    e.preventDefault();
    sorting = !sorting;

    if (sorting) {
        sortBtn.innerHTML = '↓ SORT'
        transContainer.innerHTML = '';

        /* Tie Transactions with the corresponding Date, even after sorting */

        const arrOfObj = currentAccount.transactions.map(function (trans, i) {
            return { trans, dates: currentAccount.transDates[i] }
        });

        const SortedArrOfObj = arrOfObj.sort((a, b) => b.trans - a.trans);

        const displayed = { transactions: SortedArrOfObj.map(item => item.trans), transDates: SortedArrOfObj.map(item => item.dates) };

        displayTrans(displayed);
    }

    else {
        sortBtn.innerHTML = '↑ SORT'
        transContainer.innerHTML = '';

        /* Tie Transactions with the corresponding Date, even after sorting */

        const arrOfObj = currentAccount.transactions.map(function (trans, i) {
            return { trans, dates: currentAccount.transDates[i] }
        });

        const SortedArrOfObj = arrOfObj.sort((a, b) => a.trans - b.trans);

        const displayed = { transactions: SortedArrOfObj.map(item => item.trans), transDates: SortedArrOfObj.map(item => item.dates) };

        displayTrans(displayed)
    }
});





