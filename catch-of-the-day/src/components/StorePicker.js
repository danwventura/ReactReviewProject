import React, {Fragment} from 'react';
import {render} from 'react-dom';

class StorePicker extends React.Component {
	render() {
		return (
			<Fragment>
				{/* This is a comment */}
				{/* Fragments allow you to return more than one html element (replaces need for divs) */}
				<form className='store-selector'>
					<h2>Please Enter a Store</h2>
					<input type="text" required placeholder='Store Name'></input>
					<button type="submit">Visit Store</button>
				</form>
			</Fragment>
		) 
	}
}

// render(<StorePicker/>, document.querySelector('#main'));
export default StorePicker;