/**
 * Query index
 *
 */
// @ts-nocheck

const updateMultipleColumns = (columns, values) => columns.map((col, idx) => `${col}=${typeof values[idx] === 'string' && values[idx] !== 'CURRENT_TIME' ? "'" + values[idx] + "'" : values[idx]}`);

module.exports = {
	callTable: (table, limit = false, rowCount = null) => `select *
		from ${table} ${limit && 'LIMIT ' + rowCount};`,

	updateTable: ({ table, multiColumn, columns, values, conditionColumn, condition }) => `
		update ${table}
		set ${multiColumn ? updateMultipleColumns(columns, values) : `${columns.join('')}=${values.join('')}`}
		where ${conditionColumn}=${condition};`,

	insertIntoTable: ({ table, columns }) => `
		insert into ${table}(${columns.join(',')})
		values(${columns.join(',')});`,

	deleteFromTable: ({ table, conditionColumn, condition }) => `
		delete from ${table}
		where ${conditionColumn}=${condition};`,

	testQuery: () => `select now();`
};
