import loadNames from "./calculation";
import React from "react";
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {values: {'%AST':50, '%OREB':50, '%DREB':50, '%STL':50, '%BLK':50, 'Freq_6':50, 'Diff%_6':50, 'Freq_15':50, 'Diff%_15':50, 'Freq_Handoff_Off':50, 'eFG%_Handoff_Off':50, 'Freq_Iso_Def':50, 'eFG%_Iso_Def':50, 'Freq_Iso_Off':50, 'eFG%_Iso_Off':50, 'Freq_OffScreen_Off':50, 'eFG%_OffScreen_Off':50, 'Freq_P&R_Handler_Off':50, 'eFG%_P&R_Handler_Off':50, 'Freq_P&R_Man_Off':50, 'eFG%_P&R_Man_Off':50, 'Freq_Postup_Off':50, 'eFG%_Postup_Off':50, 'Freq_Putbacks_Off':50, 'eFG%_Putbacks_Off':50, 'Freq_Spotup_Off':50, 'eFG%_Spotup_Off':50, 'Freq_Tight':50, 'eFG%_Tight':50, 'Freq_Open':50, 'eFG%_Open':50, 'FGA_Catch_And_Shoot':50, 'EFG%_Catch_And_Shoot':50, 'FGA_Pull_Up':50, 'EFG%_Pull_Up':50, 'DRIVES_Drives':50, 'FG%_Drives':50}};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  
    handleChange(event,var_change) {
      const newState = this.state.values
      newState[var_change] = parseInt(event.target.value)
      this.setState({values:newState});
    }
  
    handleSubmit(event) {
      console.log(loadNames(this.state.values));
      event.preventDefault();
    } 
  
    render() {
      return (
                <form onSubmit={this.handleSubmit}>
                  <br /> 
                  <h3> Scoring </h3>
                  <br />           <label>             %AST            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'%AST')}  />             <output>{this.state.values['%AST']}</output>           </label> <br />
                  <br />           <label>             %OREB            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'%OREB')}  />             <output>{this.state.values['%OREB']}</output>           </label> <br />
                  <br />           <label>             %DREB            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'%DREB')}  />             <output>{this.state.values['%DREB']}</output>           </label> <br />
                  <br />           <label>             %STL            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'%STL')}  />             <output>{this.state.values['%STL']}</output>           </label> <br />
                  <br />           <label>             %BLK            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'%BLK')}  />             <output>{this.state.values['%BLK']}</output>           </label> <br />
                  <br />           <label>             Freq_6            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_6')}  />             <output>{this.state.values['Freq_6']}</output>           </label> <br />
                  <br />           <label>             Diff%_6            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Diff%_6')}  />             <output>{this.state.values['Diff%_6']}</output>           </label> <br />
                  <br />           <label>             Freq_15            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_15')}  />             <output>{this.state.values['Freq_15']}</output>           </label> <br />
                  <br />           <label>             Diff%_15            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Diff%_15')}  />             <output>{this.state.values['Diff%_15']}</output>           </label> <br />
                  <br />           <label>             Freq_Handoff_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Handoff_Off')}  />             <output>{this.state.values['Freq_Handoff_Off']}</output>           </label> <br />
                  <br />           <label>             eFG%_Handoff_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Handoff_Off')}  />             <output>{this.state.values['eFG%_Handoff_Off']}</output>           </label> <br />
                  <br />           <label>             Freq_Iso_Def            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Iso_Def')}  />             <output>{this.state.values['Freq_Iso_Def']}</output>           </label> <br />
                  <br />           <label>             eFG%_Iso_Def            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Iso_Def')}  />             <output>{this.state.values['eFG%_Iso_Def']}</output>           </label> <br />
                  <br />           <label>             Freq_Iso_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Iso_Off')}  />             <output>{this.state.values['Freq_Iso_Off']}</output>           </label> <br />
                  <br />           <label>             eFG%_Iso_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Iso_Off')}  />             <output>{this.state.values['eFG%_Iso_Off']}</output>           </label> <br />
                  <br />           <label>             Freq_OffScreen_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_OffScreen_Off')}  />             <output>{this.state.values['Freq_OffScreen_Off']}</output>           </label> <br />
                  <br />           <label>             eFG%_OffScreen_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_OffScreen_Off')}  />             <output>{this.state.values['eFG%_OffScreen_Off']}</output>           </label> <br />
                  <br />           <label>             Freq_P/R_Handler_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_P&R_Handler_Off')}  />             <output>{this.state.values['Freq_P&R_Handler_Off']}</output>           </label> <br />
                  <br />           <label>             eFG%_P/R_Handler_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_P&R_Handler_Off')}  />             <output>{this.state.values['eFG%_P&R_Handler_Off']}</output>           </label> <br />
                  <br />           <label>             Freq_P/R_Man_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_P&R_Man_Off')}  />             <output>{this.state.values['Freq_P&R_Man_Off']}</output>           </label> <br />
                  <br />           <label>             eFG%_P/R_Man_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_P&R_Man_Off')}  />             <output>{this.state.values['eFG%_P&R_Man_Off']}</output>           </label> <br />
                  <br />           <label>             Freq_Postup_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Postup_Off')}  />             <output>{this.state.values['Freq_Postup_Off']}</output>           </label> <br />
                  <br />           <label>             eFG%_Postup_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Postup_Off')}  />             <output>{this.state.values['eFG%_Postup_Off']}</output>           </label> <br />
                  <br />           <label>             Freq_Putbacks_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Putbacks_Off')}  />             <output>{this.state.values['Freq_Putbacks_Off']}</output>           </label> <br />
                  <br />           <label>             eFG%_Putbacks_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Putbacks_Off')}  />             <output>{this.state.values['eFG%_Putbacks_Off']}</output>           </label> <br />
                  <br />           <label>             Freq_Spotup_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Spotup_Off')}  />             <output>{this.state.values['Freq_Spotup_Off']}</output>           </label> <br />
                  <br />           <label>             eFG%_Spotup_Off            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Spotup_Off')}  />             <output>{this.state.values['eFG%_Spotup_Off']}</output>           </label> <br />
                  <br />           <label>             Freq_Tight            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Tight')}  />             <output>{this.state.values['Freq_Tight']}</output>           </label> <br />
                  <br />           <label>             eFG%_Tight            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Tight')}  />             <output>{this.state.values['eFG%_Tight']}</output>           </label> <br />
                  <br />           <label>             Freq_Open            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'Freq_Open')}  />             <output>{this.state.values['Freq_Open']}</output>           </label> <br />
                  <br />           <label>             eFG%_Open            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'eFG%_Open')}  />             <output>{this.state.values['eFG%_Open']}</output>           </label> <br />
                  <br />           <label>             FGA_Catch_And_Shoot            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'FGA_Catch_And_Shoot')}  />             <output>{this.state.values['FGA_Catch_And_Shoot']}</output>           </label> <br />
                  <br />           <label>             EFG%_Catch_And_Shoot            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'EFG%_Catch_And_Shoot')}  />             <output>{this.state.values['EFG%_Catch_And_Shoot']}</output>           </label> <br />
                  <br />           <label>             FGA_Pull_Up            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'FGA_Pull_Up')}  />             <output>{this.state.values['FGA_Pull_Up']}</output>           </label> <br />
                  <br />           <label>             EFG%_Pull_Up            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'EFG%_Pull_Up')}  />             <output>{this.state.values['EFG%_Pull_Up']}</output>           </label> <br />
                  <br />           <label>             DRIVES_Drives            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'DRIVES_Drives')}  />             <output>{this.state.values['DRIVES_Drives']}</output>           </label> <br />
                  <br />           <label>             FG%_Drives            <input type='range' min='0' max='100'step='2' onChange={(event) => this.handleChange(event,'FG%_Drives')}  />             <output>{this.state.values['FG%_Drives']}</output>           </label> <br />
                  <br />
                <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Form />);

export default Form