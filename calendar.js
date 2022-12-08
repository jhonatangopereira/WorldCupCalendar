const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  prevNextIcon = document.querySelectorAll(".icons i")

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth()

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

const renderCalendar = () => {
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(),
    lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate()
  let liTag = ""

  let prevMonth = currMonth === 0 ? 12 : currMonth,
    prevYear = prevMonth === 12 ? currYear - 1 : currYear,
    nextMonth = currMonth + 1 === 12 ? 1 : currMonth + 2,
    nextYear = nextMonth === 1 ? currYear + 1 : currYear

  for (let i = firstDayOfMonth; i > 0; i--) {
    let dayOfLastMonth = lastDateOfLastMonth - i + 1
    liTag += `<li data="${dayOfLastMonth}/${prevMonth}/${prevYear}" class="inactive">${dayOfLastMonth}</li>`
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : ""
    liTag += `<li data="${i}/${
      currMonth + 1
    }/${currYear}" class="${isToday}">${i}</li>`
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    let dayOfNextMonth = i - lastDayOfMonth + 1
    liTag += `<li data="${dayOfNextMonth}/${nextMonth}/${nextYear}" class="inactive">${dayOfNextMonth}</li>`
  }

  currentDate.innerHTML = `${months[currMonth]} ${currYear}`
  daysTag.innerHTML = liTag
}

renderCalendar()

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1
    if (currMonth < 0) {
      currMonth = 11
      currYear -= 1
    } else if (currMonth > 11) {
      currMonth = 0
      currYear += 1
    }
    renderCalendar()
  })
})

const modal = document.querySelector("#calendar-modal"),
btnOpenModal = document.querySelector("#calendar-icon"),
btnCloseModal = document.querySelector("#close-modal")

btnOpenModal.onclick = function () {
  modal.style.display = "block"
}

btnCloseModal.onclick = function () {
  modal.style.display = "none"
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
} 
