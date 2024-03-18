import beehive from "@/love/hAsset/business/1.png";

const brand = () => {
	var brandObject

		brandObject = {
			logo: beehive,
			name: "Beehive Corporation",
			app: "https://beehive-frontend.netlify.app/",
			admin: "https://beehive-admin.netlify.app/"
		}
						
	return brandObject
}

export default brand