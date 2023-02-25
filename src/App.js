import {UserInfo} from "./UserInfo";
import axios from "axios";

import {CurrentUserLoader} from "./CurrentUserLoader";
import {UserLoader} from "./UserLoader";

import {ResourceLoader} from "./ResourceLoader";
import {ProductInfo} from "./ProductInfo";
import {DataSource} from "./DataSource";
const getServerData = url => async () => {
	const response = await axios.get(url);
	return response.data;
}

function App() {
	return (

		<>
			<ResourceLoader
				resourceUrl='/products/1234'
				resourceName='product'>
				<ProductInfo />
			</ResourceLoader>
			<UserLoader userId='456'>
				<UserInfo />
			</UserLoader>
			<UserLoader userId='234'>
				<UserInfo />
			</UserLoader>
			<UserLoader userId='123'>
				<UserInfo />
			</UserLoader>

			<ResourceLoader
				resourceUrl='/users/123'
				resourceName='user'>
				<UserInfo />
			</ResourceLoader>

			<ResourceLoader
				resourceUrl='/products/5678'
				resourceName='product'>
				<ProductInfo />
			</ResourceLoader>

			<DataSource
				getDataFunc={getServerData( '/users/123')}
				resourceName='user'>
				<UserInfo />
			</DataSource>
		</>

	);
}

export default App;
