// ✅ Your CrudCrud API endpoint
const API_URL = "https://crudcrud.com/api/d1c50f71a2934f949bced12801da1ada/bookings";

// ✅ DOM elements
const form = document.getElementById("booking-form");
const totalBooked = document.getElementById("total-booked");
const bookingList = document.getElementById("booking-list");
const findSlotInput = document.getElementById("find-slot");

// ✅ Load existing bookings when the page loads
window.addEventListener("DOMContentLoaded", () => {
  axios.get(API_URL)
    .then(response => {
      response.data.forEach(displayBooking);
      updateTotalBookings();
    })
    .catch(error => console.error("Error fetching bookings:", error));
});

// ✅ Add new booking
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const bookingData = {
    userName: event.target.userName.value.trim(),
    seatNumber: event.target.seatNumber.value.trim()
  };

  // ✅ Step 1: Check if the seat number is already booked
  axios.get(API_URL)
    .then(response => {
      const existingBookings = response.data;
      const seatTaken = existingBookings.some(
        (booking) => booking.seatNumber === bookingData.seatNumber
      );

      if (seatTaken) {
        alert("Already booked");
      } else {
        // ✅ Step 2: Proceed with booking
        axios.post(API_URL, bookingData)
          .then(res => {
            displayBooking(res.data);
            updateTotalBookings();
            form.reset();
          })
          .catch(err => console.error("Error adding booking:", err));
      }
    })
    .catch(error => console.error("Error checking seat:", error));
});

// ✅ Display booking dynamically
function displayBooking(booking) {
  const li = document.createElement("li");
  li.textContent = `${booking.userName} - Seat ${booking.seatNumber}`;

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = function () {
    editBooking(booking, li);
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    deleteBooking(booking._id, li);
  };

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  bookingList.appendChild(li);
}

// ✅ Delete booking (from CrudCrud + UI)
function deleteBooking(id, listItem) {
  axios.delete(`${API_URL}/${id}`)
    .then(() => {
      bookingList.removeChild(listItem);
      updateTotalBookings();
    })
    .catch(error => console.error("Error deleting booking:", error));
}

// ✅ Edit booking (fill form and delete old one)
function editBooking(booking, listItem) {
  document.getElementById("user-name").value = booking.userName;
  document.getElementById("seat-number").value = booking.seatNumber;

  // Delete old entry so it can be re-added
  deleteBooking(booking._id, listItem);
}

// ✅ Update total bookings count
function updateTotalBookings() {
  totalBooked.textContent = bookingList.children.length;
}

// ✅ Find Slot (simple filter by seat number)
findSlotInput.addEventListener("input", function (event) {
  const searchValue = event.target.value.trim();
  const listItems = bookingList.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    const text = listItems[i].textContent;
    if (searchValue === "") {
      listItems[i].style.display = "";
    } else if (text.includes(`Seat ${searchValue}`)) {
      listItems[i].style.display = "";
    } else {
      listItems[i].style.display = "none";
    }
  }
});
