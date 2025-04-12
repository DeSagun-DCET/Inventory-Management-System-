document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("show");
  const openShowB = document.querySelector(".plus");
  const cancelB = document.getElementById("cancel");
  const addB = document.getElementById("add");

  const searchI = document.getElementById("searchI");
  const searchB = document.getElementById("searchb");
  

  openShowB.addEventListener("click", function () {
    popup.classList.add("openshow");
  });

  cancelB.addEventListener("click", function () {
    popup.classList.remove("openshow");
  });

  addB.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const details = document.getElementById("details").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;
    const date = document.getElementById("date").value;

    if (!name || !details || !quantity || !price || !date) {
      alert("Please fill all the necessary parts");
      return;
    }

    const table = document.querySelector("table");
    const rows = table.insertRow(-1);

    rows.innerHTML = `
      <td>${table.rows.length - 2}. ${name}</td>
      <td>${details}</td>
      <td style="text-align:center">${price}$</td>
      <td>${quantity}</td>
      <td>${date}</td>
      <td>
        <button><p>Edit</p></button> 
        <button><p>Remove</p></button>
      </td>
    `;

    document.getElementById("name").value = "";
    document.getElementById("details").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    document.getElementById("date").value = "";
    document.getElementById("type").selectedIndex = 0;

    popup.classList.remove("openshow");
  });
  document.addEventListener("click", (event) => {
    if (event.target.tagName === "P" && event.target.textContent === "Remove") {
      const rows = event.target.closest("tr");
      if (rows && confirm("Are you sure 100% sure you want this removed?")) {
        rows.remove();
      }
    }
  
    searchB.addEventListener("click", function () {
      const filter = searchI.value.toLowerCase();
      const table = document.querySelector("table");
      const rows = table.querySelectorAll("tr");
    
      for (let i = 2; i < rows.length; i++) {
        const nameCell = rows[i].cells[0];
        if (nameCell) {
          const text = nameCell.textContent.toLowerCase();
          rows[i].style.display = text.includes(filter) ? "" : "none";
        }
      }
    });
  
});
})
