package com.rohith.cri.Entity;




import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


	@Entity
	@Table(name="cricentity")
	public class CricEntity {

		@Id
		@GeneratedValue
		@Column(name="player_id")
		private int player_id;
		@Column(name="player_age")
		private int player_age;
		@Column(name="totalruns")
		private int total_runs;
		@Column(name="avg_strikerate")
		private int avg_strikerate;
		@Column(name="totalwickets")
		private int totalwickets;
		
	
		



		public int getPlayer_id() {
			return player_id;
		}



		public void setPlayer_id(int player_id) {
			this.player_id = player_id;
		}



		public int getPlayer_age() {
			return player_age;
		}



		public void setPlayer_age(int player_age) {
			this.player_age = player_age;
		}



		public int getTotal_runs() {
			return total_runs;
		}



		public void setTotal_runs(int total_runs) {
			this.total_runs = total_runs;
		}



		public int getAvg_strikerate() {
			return avg_strikerate;
		}



		public void setAvg_strikerate(int avg_strikerate) {
			this.avg_strikerate = avg_strikerate;
		}



		public int getTotalwickets() {
			return totalwickets;
		}



		public void setTotalwickets(int totalwickets) {
			this.totalwickets = totalwickets;
		}
		
		

		public CricEntity(int player_id, int player_age, int total_runs, int avg_strikerate, int totalwickets) {
			super();
			this.player_id = player_id;
			this.player_age = player_age;
			this.total_runs = total_runs;
			this.avg_strikerate = avg_strikerate;
			this.totalwickets = totalwickets;
		}



		public CricEntity() {
			
		}
}



