var baseTable = {
	props: {
		/*title: String,
		show: Boolean,
		text: String,
		score: Number,
		thead: Array,
		tbody: Array,*/

		iconarr: Array,/* html无法区别大小写 */
		info: Object
	},
	template: `
		<div>
			<table class="thead">
				<tr>
					<th>{{ info.title }}<span v-on:click="$emit('showfunc',info.title)" v-bind:class="iconarr"></span></th>
					<th>得分：<span>{{ info.score }}</span></th>
				</tr>
			</table>
			<table v-show="info.show" class="tbody">
				<thead>
					<tr>
						<td v-for="(item,index) in info.thead">{{ item }}</td>
					</tr>
				</thead>
				<tbody v-if="info.tbody.length">
					<tr v-for="(rowItem,rowIndex) in info.tbody" v-bind:class="(rowIndex % 2 == 0 ? 'even':'odd')">
						<template v-for="(value,key,index) in rowItem">
							<td v-if="index === 0">{{ rowIndex + 1 }}</td>
							<td v-else v-bind:title="value">{{ value }}</td>
						</template>
					</tr>
				</tbody>
			</table>
		</div>
		`
};
/*<template v-for="(item,index) in info.field">
	<td v-if="index === 0">{{ rowIndex + 1 }}</td>
	<td v-else v-bind:title="rowItem[item]">{{ rowItem[item] }}</td>
</template>*/