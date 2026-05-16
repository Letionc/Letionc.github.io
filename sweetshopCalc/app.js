const products = [
    { name: "占位", money: 0 },
    { name: "占位1", money: 1 },
    { name: "占位0.1", money: 0.1 },
    { name: "占位0.01", money: 0.01 },
    { name: "半饮", money: 0 },
    { name: "芝麻糊 炖奶", money: 8 },
    { name: "芝麻糊", money: 7 },
    { name: "红豆沙 小丸子", money: 9 },
    { name: "红豆沙", money: 7 },
    { name: "绿豆沙", money: 7 },
    { name: "绿豆沙 小丸子", money: 7 },
    { name: "桂花冻 小丸子", money: 7 },
    { name: "饮料", money: 0 },
    { name: "油柑茶", money: 15 },
    { name: "杨枝 甘露", money: 15 },
    { name: "鸭屎香 鲜奶茶", money: 12 },
    { name: "盐盐 茉莉 椰奶", money: 13 },
    { name: "鸭屎香 柠檬茶 柠檬茶", money: 12 },
    { name: "小吃", money: 0 },
    { name: "海苔味 薯条", money: 12 },
    { name: "藤椒 鸡翅尖", money: 15 },
    { name: "紫菜 花枝卷", money: 16 },
    { name: "炸鸡米花", money: 15 },
    { name: "斑斓 吐司酱", money: 12 },
    { name: "提拉米苏", money: 0 },
    { name: "芋泥味 提拉米苏", money: 16 },
    { name: "梦龙味 提拉米苏", money: 18 },
    { name: "蓝莓味 提拉米苏", money: 18 },
    { name: "面", money: 0 },
    { name: "黑椒 牛柳 意面", money: 28 },
    { name: "芝士 咖喱 鸡排 意面", money: 26 },
    { name: "辣茄汁 虾仁肉酱 意面", money: 28 },
    { name: "河粉", money: 0 },
    { name: "斑斓 河粉", money: 18 },
    { name: "芋泥 斑斓 河粉", money: 18 },
    { name: "芋泥 桃胶 原味 河粉", money: 18 },
    { name: "爆爆 芋圆 斑澜 河粉", money: 18 },
    { name: "碗", money: 0 },
    { name: "芒果 豆酪 碗", money: 16 },
    { name: "双芋 豆酪 碗", money: 16 },
    { name: "桂花 奶冻 碗", money: 16 },
    { name: "桂花 丸子 奶冻 碗", money: 16 },
    { name: "四宝 奶冻 碗", money: 16 },
    { name: "双芋 莲子 碗", money: 16 },
    { name: "鲜果烧 仙草 碗", money: 15 },
    { name: "双芋 布丁 碗", money: 16 },
    { name: "桃胶 斑斓 布丁 碗", money: 18 },
    { name: "芋圆 斑斓 布丁 碗", money: 18 },
    { name: "椰子冻", money: 0 },
    { name: "芒果 爆爆珠 椰子冻", money: 28 },
    { name: "桃胶 椰子冻", money: 28 },
    { name: "其他", money: 0 },
    { name: "莲子 桃胶 豆酪", money: 18 },
    { name: "芋泥 鲜果 桂花", money: 18 },
    { name: "仙草 大满贯", money: 18 },
    { name: "多芒 小丸子", money: 16 },
];
const productSelect = document.getElementById("product-select");
products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    if (product.money) {
        option.textContent = `·  ${product.name} -- ${product.money} 元`;
    } else {
        option.textContent = `## ${product.name} ##`;
        option.disabled = 1;
    }
    productSelect.appendChild(option);
});
document.getElementById("add-btn").addEventListener("click", () => {
    const selectedProductName = productSelect.value;
    if (!selectedProductName) return;
    const selectedProduct = products.find(
        (p) => p.name === selectedProductName,
    );
    if (!selectedProduct) return;
    addToBill(selectedProduct);
});
function addToBill(product) {
    const tbody = document.querySelector("#bill-table tbody");
    const existingRow = Array.from(tbody.rows).find(
        (row) => row.cells[0].textContent === product.name,
    );
    if (existingRow) {
        const quantityInput = existingRow.querySelector("input");
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateRowTotal(existingRow);
    } else {
        const row = tbody.insertRow();
        const nameCell = row.insertCell();
        nameCell.textContent = product.name;
        const priceCell = row.insertCell();
        priceCell.textContent = product.money.toFixed(2);
        const quantityCell = row.insertCell();
        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.min = "1";
        quantityInput.value = "1";
        quantityInput.addEventListener("change", () => {
            updateRowTotal(row);
        });
        quantityCell.appendChild(quantityInput);
        const subtotalCell = row.insertCell();
        subtotalCell.textContent = product.money.toFixed(2);
        const actionCell = row.insertCell();
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "删除";
        removeBtn.addEventListener("click", () => {
            row.remove();
            calculateTotal();
        });
        actionCell.appendChild(removeBtn);
    }
    calculateTotal();
}
function updateRowTotal(row) {
    const price = parseFloat(row.cells[1].textContent);
    const quantity = parseInt(row.querySelector("input").value);
    const subtotal = price * quantity;
    row.cells[3].textContent = subtotal.toFixed(2);
    calculateTotal();
}
function calculateTotal() {
    const rows = document.querySelectorAll("#bill-table tbody tr");
    let total = 0;
    rows.forEach((row) => {
        total += parseFloat(row.cells[3].textContent);
    });
    document.getElementById("total-amount").textContent =
        total.toFixed(2);
}
