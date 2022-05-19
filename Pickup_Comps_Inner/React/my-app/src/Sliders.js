import loadNames from "./calculation";
import React from "react";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {checkVal:false,final: {}, values: {'%AST':50, '%OREB':50, '%DREB':50, '%STL':50, '%BLK':50, 'Freq_6':50, 'Diff%_6':50, 'Freq_15':50, 'Diff%_15':50, 'Freq_Handoff_Off':50, 'eFG%_Handoff_Off':50, 'Freq_Iso_Def':50, 'eFG%_Iso_Def':50, 'Freq_Iso_Off':50, 'eFG%_Iso_Off':50, 'Freq_OffScreen_Off':50, 'eFG%_OffScreen_Off':50, 'Freq_P&R_Handler_Off':50, 'eFG%_P&R_Handler_Off':50, 'Freq_P&R_Man_Off':50, 'eFG%_P&R_Man_Off':50, 'Freq_Postup_Off':50, 'eFG%_Postup_Off':50, 'Freq_Putbacks_Off':50, 'eFG%_Putbacks_Off':50, 'Freq_Spotup_Off':50, 'eFG%_Spotup_Off':50, 'Freq_Tight':50, 'eFG%_Tight':50, 'Freq_Open':50, 'eFG%_Open':50, 'FGA_Catch_And_Shoot':50, 'EFG%_Catch_And_Shoot':50, 'FGA_Pull_Up':50, 'EFG%_Pull_Up':50, 'DRIVES_Drives':50, 'FG%_Drives':50, 'Height':50}};
      this.text = {questions : {
        'AST_Question': "What is your Assist Percentile?", 
        'OREB_Question': 'Are you Rodman when Jordan misses a shot or you just Isaiah Thomas (Offensive Rebound Percentile)?', 
        'DREB_Question': 'You getting big for some board or you small (Defensive Rebound Percentile)?', 
        'STL_Question': 'You laying out for those steals or do you get caught reaching (Steal Percentile)?', 
        'BLK_Question': 'What is your Block Percentile?', 
        'Freq_6_Question': 'How often do people attack you in the paint (Frequency of Defending Shots within Six Feet)?', 
        'Diff_6_Question': 'How well do you defend the paint?', 
        'Freq_15_Question': 'How often are you running around the perimeter (Frequency of Defending Shots outside Fifteen Feet', 
        'Diff_15_Question': 'How well do you defend the perimeter?', 
        'Freq_Handoff_Off_Question': 'How often to do you get handoffs (Handoff Frequency Percentile)?', 
        'eFG_Handoff_Off_Question': 'How good are you at scoring off handoffs (Handoff Efficiency Percentile)?', 
        'Freq_Iso_Def_Question': 'How often do you get called out for an Iso (Defensive Iso Frequency Percentile)', 
        'eFG_Iso_Def_Question': 'How well do you defend the Iso (Defensive Iso Efficiency Percentile)?', 
        'Freq_Iso_Off_Question': 'How often you calling for the Iso (Offensive Iso Frequency Percentile)?', 
        'eFG_Iso_Off_Question': 'How well are you in the Iso (Offensive Iso Efficiency Percentile)?', 
        'Freq_OffScreen_Off_Question': 'How often are you unlocking your in Klay and coming off offscreens (Offscreen Freqency Percentile)?', 
        'eFG_OffScreen_Off_Question': 'Are you like Curry coming off an offscreen or more Jokiam Noah (Offscreen Efficiency Percentile)?', 
        'Freq_P&R_Handler_Off_Question': 'How often are you the ballhandler in the pick and roll (P&R Handler Frequency Percentile)?', 
        'eFG_P&R_Handler_Off_Question': 'Are you a bucket in the pick and roll as the ballhander (P&R Handler Efficiency Percentile)?', 
        'Freq_P&R_Man_Off_Question': 'How often are you the rollman in the pick and roll (P&R Man Frequency Percentile)?', 
        'eFG_P&R_Man_Off_Question': 'Are you Ayton after setting a screen or are you Trae if he tried to set a screen (P&R Mabn Efficinecy Percentile)?', 
        'Freq_Postup_Off_Question': 'Do you get your big butt in the paint (What Charles Barkely says Embiid should do more) (Postup Frequency Percentile)?', 
        'eFG_Postup_Off_Question': "Do you have Hakeem's post moves (Postup Efficiency Percentile)?",
        'Freq_Putbacks_Off_Question': 'How often you going for the putback (Putback Frequency Percentile)?', 
        'eFG_Putbacks_Off_Question': 'Are you a putback beast (Putback Efficiency Percentile)?', 
        'Freq_Spotup_Off_Question': 'How often do you spotup (Spotup Frequency Percentile)?', 
        'eFG_Spotup_Off_Question': 'How good are you at spotting up (Spotup Efficiency Percentile)?', 
        'Freq_Tight_Question': 'How often do you take what coach calls bad shots (Tight Shot Frequency Percentile)?', 
        'eFG_Tight_Question': 'Are you a tough bucket getter (Tight Shot Efficiency Percentile)?', 
        'Freq_Open_Question': 'How often is the defense leaving you open (Open Shot Frequency Percentile)?', 
        'eFG_Open_Question': 'How often do you make the defense pay (Open Shot Efficiency Percentile)?', 
        'FGA_Catch_And_Shoot_Question': 'How often is someone kicking out to you (Catch and Shoot Frequency Percentile)?', 
        'EFG_Catch_And_Shoot_Question': 'Are you the type of player Lebron likes to play with (Catch and Shoot Efficiency Percentile)?', 
        'FGA_Pull_Up_Question': 'How often do you pull up (Pull up Frequency Percentile)?', 
        'EFG_Pull_Up_Question': 'Are you just like Derozan, when you shoot it does it goes in (Pull up Efficiency Percentile)?',
        'Drives_Question': 'How often do you drive to the basket (Drive Frequency Percentile)?', 
        'FG%_Drives_Question': 'How easily do you score driving (Drive Efficiency Percentile)?', 
        'Height_Question': 'How tall are you in inches?'
      }};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);  
    } 
    
  
    handleChange(event,var_change) {
      const newState = this.state.values
      newState[var_change] = parseInt(event.target.value)
      this.setState({values:newState});
    }
  
    handleSubmit(event) {
      this.setState({final:(loadNames(this.state.values))});
      this.setState({checkVal:(true)});
      console.log(this.state.final);
      event.preventDefault();
    } 

    renderComp(names,index){
      if(this.state.checkVal){
        let list_print = ["Your are literally ", "Your second closest comparision is ", "Your third closest comparision is "]
        let list_stuff = []
        for (let k in names) {
          list_stuff.push(k + " and you're off by " + names[k] + ' average points')
        }
        return(list_print[index] + list_stuff[index])
      }else{
        return('')
    }
    }
  
    render() {
      return (
                <form onSubmit={this.handleSubmit}>
                  <br /> 
                  <h3>Passing</h3> 
                  <br />           <label>             {this.text.questions['AST_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'%AST')}  />             <output>{this.state.values['%AST']}</output>           </label> <br /><br /> 
                  <h3>Rebounding</h3>
                  <br />           <label>             {this.text.questions['OREB_Question']}            <br /> <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'%OREB')}  />             <output>{this.state.values['%OREB']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['DREB_Question']}            <br /> <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'%DREB')}  />             <output>{this.state.values['%DREB']}</output>           </label> <br /><br />
                  <h3>Defense</h3>
                  <br />           <label>             {this.text.questions['STL_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'%STL')}  />             <output>{this.state.values['%STL']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['BLK_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'%BLK')}  />             <output>{this.state.values['%BLK']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Freq_6_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_6')}  />             <output>{this.state.values['Freq_6']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Diff_6_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Diff%_6')}  />             <output>{this.state.values['Diff%_6']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Freq_15_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_15')}  />             <output>{this.state.values['Freq_15']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Diff_15_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Diff%_15')}  />             <output>{this.state.values['Diff%_15']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Freq_Iso_Def_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Iso_Def')}  />             <output>{this.state.values['Freq_Iso_Def']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['eFG_Iso_Def_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Iso_Def')}  />             <output>{this.state.values['eFG%_Iso_Def']}</output>           </label> <br /><br />
                  <h3>Scoring Types</h3>
                  <br />           <label>             {this.text.questions['Freq_Handoff_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Handoff_Off')}  />             <output>{this.state.values['Freq_Handoff_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['eFG_Handoff_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Handoff_Off')}  />             <output>{this.state.values['eFG%_Handoff_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Freq_Iso_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Iso_Off')}  />             <output>{this.state.values['Freq_Iso_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['eFG_Iso_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Iso_Off')}  />             <output>{this.state.values['eFG%_Iso_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Freq_OffScreen_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_OffScreen_Off')}  />             <output>{this.state.values['Freq_OffScreen_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['eFG_OffScreen_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_OffScreen_Off')}  />             <output>{this.state.values['eFG%_OffScreen_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Freq_P&R_Handler_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_P&R_Handler_Off')}  />             <output>{this.state.values['Freq_P&R_Handler_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['eFG_P&R_Handler_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_P&R_Handler_Off')}  />             <output>{this.state.values['eFG%_P&R_Handler_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Freq_P&R_Man_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_P&R_Man_Off')}  />             <output>{this.state.values['Freq_P&R_Man_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['eFG_P&R_Man_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_P&R_Man_Off')}  />             <output>{this.state.values['eFG%_P&R_Man_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Freq_Postup_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Postup_Off')}  />             <output>{this.state.values['Freq_Postup_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['eFG_Postup_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Postup_Off')}  />             <output>{this.state.values['eFG%_Postup_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Freq_Putbacks_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Putbacks_Off')}  />             <output>{this.state.values['Freq_Putbacks_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['eFG_Putbacks_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Putbacks_Off')}  />             <output>{this.state.values['eFG%_Putbacks_Off']}</output>           </label> <br /><br /> 
                  <br />           <label>             {this.text.questions['Freq_Spotup_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Spotup_Off')}  />             <output>{this.state.values['Freq_Spotup_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['eFG_Spotup_Off_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Spotup_Off')}  />             <output>{this.state.values['eFG%_Spotup_Off']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['FGA_Catch_And_Shoot_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'FGA_Catch_And_Shoot')}  />             <output>{this.state.values['FGA_Catch_And_Shoot']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['EFG_Catch_And_Shoot_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'EFG%_Catch_And_Shoot')}  />             <output>{this.state.values['EFG%_Catch_And_Shoot']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['FGA_Pull_Up_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'FGA_Pull_Up')}  />             <output>{this.state.values['FGA_Pull_Up']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['EFG_Pull_Up_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'EFG%_Pull_Up')}  />             <output>{this.state.values['EFG%_Pull_Up']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Drives_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'DRIVES_Drives')}  />             <output>{this.state.values['DRIVES_Drives']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['FG%_Drives_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'FG%_Drives')}  />             <output>{this.state.values['FG%_Drives']}</output>           </label> <br /><br />
                  <h3>Shooting Difficulty</h3>
                  <br />           <label>             {this.text.questions['Freq_Tight_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Tight')}  />             <output>{this.state.values['Freq_Tight']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['eFG_Tight_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Tight')}  />             <output>{this.state.values['eFG%_Tight']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['Freq_Open_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Open')}  />             <output>{this.state.values['Freq_Open']}</output>           </label> <br /><br />
                  <br />           <label>             {this.text.questions['eFG_Open_Question']}            <br /><input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Open')}  />             <output>{this.state.values['eFG%_Open']}</output>           </label> <br /><br />
                  <h3>Height</h3>
                  <br />           <label>             {this.text.questions['Height_Question']}             <br /> <input type='number' onChange={(event) => this.handleChange(event,'Height')}  />             <output>{this.state.values['Height']}</output>           </label> <br /><br />
                  <br />  
                <input type="submit" value="Submit" />
                <br /><br /><br />
                <output id='output_name' class='first'>{this.renderComp(this.state.final,0)}</output> <br />
                <output id='output_name' class='second'>{this.renderComp(this.state.final,1)}</output> <br />
                <output id='output_name'class='third'> {this.renderComp(this.state.final,2)}</output> <br />
        </form>
      );
    }
  }

export default Form 