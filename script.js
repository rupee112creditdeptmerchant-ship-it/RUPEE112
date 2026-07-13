const upiInput = document.getElementById("upiInput");
const copyBtn = document.getElementById("copyBtn");

const utr = document.getElementById("utr");
const confirmBtn = document.getElementById("confirmBtn");

/* ===========================
   COPY UPI ID
=========================== */

copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(upiInput.value);

    const oldText = copyBtn.innerText;

    copyBtn.innerText = "COPIED ✓";

    copyBtn.classList.add("copied");

    setTimeout(() => {

        copyBtn.innerText = oldText;
        copyBtn.classList.remove("copied");

    }, 1500);

});


/* ===========================
   UTR INPUT
=========================== */

utr.addEventListener("input", () => {

    utr.value = utr.value.replace(/\D/g, "");

    if (utr.value.length > 12) {
        utr.value = utr.value.slice(0, 12);
    }

});


/* ===========================
   ENTER KEY
=========================== */

utr.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        confirmBtn.click();

    }

});


/* ===========================
   VERIFY BUTTON
=========================== */

confirmBtn.addEventListener("click", () => {

    const value = utr.value.trim();

    if (value === "") {

        alert("Please enter UTR Number.");

        utr.focus();

        return;

    }

    if (value.length !== 12) {

        alert("UTR must contain exactly 12 digits.");

        utr.focus();

        return;

    }

    confirmBtn.disabled = true;

    confirmBtn.innerHTML = "VERIFYING...";

    setTimeout(() => {

        confirmBtn.innerHTML = "PAYMENT VERIFIED ✓";

        confirmBtn.style.background = "#16a34a";

        alert("Payment submitted successfully.");

        setTimeout(() => {

            utr.value = "";

            confirmBtn.disabled = false;

            confirmBtn.innerHTML = "CONFIRM REPAYMENT";

            confirmBtn.style.background = "";

            utr.focus();

        }, 800);

    }, 1800);

});