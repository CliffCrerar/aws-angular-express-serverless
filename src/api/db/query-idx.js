/**
 * Query index
 *
 */
// @ts-nocheck

module.exports = {
	callTable: (table) => `select * from ${table}`,
	testQuery: () => `select now();`
}
