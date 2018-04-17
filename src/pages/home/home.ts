import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/dataService';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    localPath: string = '/assets/data.json';
    profile: Array<any>;
    comments: Array<any>;
    inputComment: string;
    likesNr: number;
    followingNr: number;
    followersNr: number;
    buttonClicked: boolean = true;

    constructor(public navCtrl: NavController, public dataService: DataService) {
        this.loadData();
    }

    loadData() {
        this.dataService.getData(this.localPath).then(data => {
            this.profile = data.profile;
            this.comments = data.comments;
            this.likesNr = data.profile.likes;
            this.followingNr = data.profile.following;
            this.followersNr = data.profile.followers;
        });
    }

    getComment() {
        let newComment = {
            name: "Mike Ross",
            content: this.inputComment,
            image: "assets/image_harvey.jpg",
            datePublished: "2018-04-14T12:42:47.487Z"
        };
        this.comments.push(newComment);
        console.log(this.comments);
    }

    favIconTapped() {
        this.likesNr = this.likesNr + 1;
        console.log(this.likesNr);
    }

    followTapped() {
        this.followingNr = this.followingNr + 1;
        this.followersNr = this.followersNr + 1;
    }

    shareTapped() {
        let queryString = window.location.href;
        alert(queryString);
    }

    onButtonClick() {
        this.buttonClicked = !this.buttonClicked;
    }

}
