// import Grid from 'assets/grid.js';
var Grid = require('./assets/grid');

var data = {
	total: 10,
	totalAmount: 100,
	items: [
		{ id: 1, date: '2015-01-01', category: 'Category', desc: 'Description text', amount: 21 },
		{ id: 2, date: '2015-01-02', category: 'Category', desc: 'Description text', amount: 22 },
		{ id: 3, date: '2015-01-03', category: 'Category', desc: 'Description text', amount: 23 },
		{ id: 4, date: '2015-01-04', category: 'Category', desc: 'Description text', amount: 24 },
		{ id: 5, date: '2015-01-05', category: 'Category', desc: 'Description text', amount: 25 },
		{ id: 6, date: '2015-01-05', category: 'Category', desc: 'Description text', amount: 26 },
		{ id: 7, date: '2015-01-05', category: 'Category', desc: 'Description text', amount: 27 },
		{ id: 8, date: '2015-01-05', category: 'Category', desc: 'Description text', amount: 28 },
		{ id: 9, date: '2015-01-05', category: 'Category', desc: 'Description text', amount: 29 },
		{ id: 10, date: '2015-01-05', category: 'Category', desc: 'Description text', amount: 30 },
		{ id: 11, date: '2015-01-05', category: 'Category', desc: 'Description text', amount: 31 }
	]
};

var grid = new Grid({
	// theme: 'light',
	target: document.getElementById('grid'),
	sort: { by: 'date', order: 'desc' },
	// dataSource: function (params) {
	// 	return $.ajax('data.json', params);
	// },
	dataSource: function (params) {
		console.log('params: ', params);
		return {};//data;
	},
	columns: [
		{ width: 50, icons: {
			pencil: function (item, row) {
				this.selectRow(row, true);
				console.log(item, row);
			},
			'trash-o': function (item, row) {
				this.selectRow(row, true);
				console.log(item, row);
			}
		}},
		{ name: 'Date', field: 'date', width: 85 },
		{ name: 'Category', field: 'category', width: '40%' },
		{ name: 'Desc', field: 'desc' },
		{ name: 'Amount', field: 'amount', width: 100,
			renderer: function (txt) { return '€' + txt; /*rec.amount*/ },
			footer: function (data) { return '€' + data.totalAmount; }
		}
	]
});

// grid.load({ a: 1, b: '2' });
grid.setData(data);
