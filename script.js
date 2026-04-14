'use strict';

const deleteBtns = document.querySelectorAll('[data-testid="test-todo-delete-button"]');
const checkboxBtn = document.querySelectorAll('[data-testid="test-todo-complete-toggle"]');
const dateEl = document.querySelector('[data-testid="test-todo-due-date"]');
const statusEl = document.querySelector('[data-testid="test-todo-status"]')
const originalText = statusEl.textContent;

const timeRemainingEls = document.querySelectorAll('[data-testid="test-todo-time-remaining"]');



deleteBtns.forEach(function (deleteBtn) {


    deleteBtn.addEventListener("click", function (event) {
        console.log('hi');
        //target the delete properties of that particular elemnt click
        const card = deleteBtn.closest('.section-1-write-up');

        if (card) {
            card.classList.add('hidden');
        }

    })

})

checkboxBtn.forEach(function (checkbox) {

    checkbox.addEventListener("change", function (event) {

        const card = event.target.closest('.section-1-write-up');



        const status = card.querySelector('[data-testid="test-todo-status"]');

        const originalText = status.dataset.original;


        const title = card.querySelector('[data-testid="test-todo-tag-work"]');

        if (event.target.checked) {
            status.textContent = 'Done';
        } else {

            status.textContent = originalText;
        }

    })


});



function updateTime() {

    timeRemainingEls.forEach(function (timeRemainingEl) {
        const card = timeRemainingEl.closest('.section-1-write-up')

        const dueDateText = card.querySelector('[data-testid="test-todo-due-date"]').textContent;

        console.log(dueDateText);

        const dueDate = new Date(dueDateText);

        const now = new Date();

        const diff = dueDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (diff < 0) {
            timeRemainingEl.textContent = "Overdue";
        } else if (days === 0) {
            timeRemainingEl.textContent = "Due today";
        } else if (days === 1) {
            timeRemainingEl.textContent = "Due tomorrow";
        } else {
            timeRemainingEl.textContent = `Due in ${days} days`;
        }


    });
}

updateTime();












