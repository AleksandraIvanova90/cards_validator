export function luhnAlgorithm(value) {
  value = value.replace(/\D/g, "");
  var nCheck = 0;
  var bEven = false;

  for (var n = value.length - 1; n >= 0; n--) {
    var nDigit = parseInt(value.charAt(n), 10);

    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }
  return nCheck % 10 == 0;
}

export function getPaymentSystem(value) {
  const firstNumber = value[0];
  const secondNumber = value[1];
  let result;
  const paySys = [
    ["2", "mir"],
    ["4", "visa"],
    ["5", "master"],
    ["6", "discover"],
    [
      "3",
      [
        ["4", "amex"],
        ["7", "amex"],
        ["1", "jcb"],
        ["5", "jcb"],
        ["0", "diners_club"],
        ["6", "diners_club"],
        ["8", "diners_club"],
      ],
    ],
  ];
  paySys.forEach(function (elements) {
    if (firstNumber == elements[0]) {
      if (firstNumber == "3") {
        const element = elements[1];
        element.forEach(function (part) {
          if (secondNumber == part[0]) {
            result = part[1];
          }
        });
      } else {
        result = elements[1];
      }
    }
  });
  return result;
}

export function changingDOM(value) {
  const cards = Array.from(document.querySelectorAll(".card"));
  cards.forEach((card) => {
    const mark = card.className.includes(value);
    if (!mark) {
      card.classList.add("cdisabled");
    }
  });
}
