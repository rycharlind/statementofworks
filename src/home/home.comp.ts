import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router } from "@angular/router";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../model/project';
import { Sow } from '../model/sow';
import { UserService } from '../firebase-service/user.svc';
var Chart = require('chart.js');

@Component({
	selector: 'sl-home',
	templateUrl: './home.html',
	providers: [UserService]
})

export class HomeComponent implements OnInit {

	items: FirebaseListObservable<any[]>;
	email: string;

	constructor(
		private userService: UserService,
		af: AngularFire, private router: Router) {

	}

	ngOnInit() {
		this.userService.authUser();

		this.createBarChart();
		this.createPieChart();

	}


	createBarChart() {

		var data = {
			labels: ["SOW56", "SOW54", "SOW34", "SOW23", "SOW65", "SOW78", "SOW43", "SOW76", "SOW23", "SOW66", "SOW69", "SOW19"],
			datasets: [{
				label: 'Cost Value',
				data: [443000, 324566, 325667, 453445, 567654, 54667, 543565, 234565, 54334, 656554, 655467, 66565],
				backgroundColor: [
					'#673AB7',
					'#FF9800',
					'#2196F3',
					'#8BC34A',
					'#00BCD4',
					'#009688',
					'#FFC107',
					'#795548',
					'#FF8A65',
					'#FBC02D',
					'#C0CA33',
					'#2E7D32'
				]
			}]
		};

		var options = {
			title: {
				display: true,
				text: "SOWs by Cost"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		};

		this.createChart("barChart", "bar", data, options);

	}


	createPieChart() {
		var data = {
			labels: ["SOW56", "SOW54", "SOW34", "SOW23", "SOW65", "SOW78", "SOW43", "SOW76", "SOW23", "SOW66", "SOW69", "SOW19"],
			datasets: [{
				label: 'Cost Value',
				data: [443000, 324566, 325667, 453445, 567654, 54667, 543565, 234565, 54334, 656554, 655467, 66565],
				backgroundColor: [
					'#673AB7',
					'#FF9800',
					'#2196F3',
					'#8BC34A',
					'#00BCD4',
					'#009688',
					'#FFC107',
					'#795548',
					'#FF8A65',
					'#FBC02D',
					'#C0CA33',
					'#2E7D32'
				]
			}]
		};


		this.createChart("pieChart", "pie", data, null);


	}


	createChart(id, type, data, options) {

		var ctx = document.getElementById(id);
		var myChart = new Chart(ctx, {
			type: type,
			data: data,
			options: options
		});

	}



}