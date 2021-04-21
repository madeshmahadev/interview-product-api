import React from 'react';
import './App.css';
import axios from 'axios';
import { 
    Container,
    Icon,
    Link,
    List,
    ListItem,
    Offcanvas,
    OffcanvasContainer,
    Navbar,
    NavbarContainer,
    NavbarSticky,
    Section,
	Grid,
	Card
} from 'uikit-react';



export default class Apps extends React.Component {

  state = {
    products: []
  }
  
  componentDidMount(){
	axios.get("http://127.0.0.1:5000/api/products/")
	.then(res=>{
			const products = res.data;
			this.setState({products});
	});
	
  }
	
 render(){
	  return (
		<React.Fragment>
			<Container>
				<Grid>
					<h1 className="uk-text-center uk-margin-auto uk-text-bolder uk-margin-medium-top">Our Products</h1>
				</Grid>
					
			<div className="uk-grid uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center">
				{this.state.products.map(products=> 
				<div>
					<div className="uk-card uk-card-primary uk-card-body uk-height-max-large">
						<div className="uk-card-media-top">
								<img src={products.Image} style={{height:'50%', width:'50%'}} />
						</div>
						<div className="uk-card-body">
								<h3 className="uk-card-title">{products.Name}</h3>
								<p>{products.Description}</p>
								<p>$<strong>{products.Price}</strong></p>
						</div>
					</div>
				</div>
				)}
			</div>
					
			</Container>
		</React.Fragment>
	  );
    }
}
			
		
