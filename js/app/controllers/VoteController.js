function VoteController() {
    this.votes = 0;
    this.originalVotes = this.votes;

    this.incrementVotes = function () {
    	if (this.votes <= this.originalVotes)
    		this.votes++;
    };

    this.decrementVotes = function () {
    	if (this.votes >= this.originalVotes)
    		this.votes--;
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);