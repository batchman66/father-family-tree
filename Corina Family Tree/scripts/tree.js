const searchParams = new URLSearchParams(window.location.search);
let familyId = searchParams.get('id');
console.log("id: " + familyId);
if (familyId) {
  openTree(familyId);
}
else {
  console.log("id 1");
  openTree(1);
}

function openTree (familyId) {
    const father = family[family[familyId - 1].father - 1];
    const mother = family[family[familyId - 1].mother - 1];
    document.getElementById("tree-box-1").textContent = family[familyId - 1].fname + " " + family[familyId - 1].lname;
    document.getElementById("tree-box-2").textContent = father.fname + " " + father.lname;
    document.getElementById("tree-box-3").textContent = mother.fname + " " + mother.lname;
}