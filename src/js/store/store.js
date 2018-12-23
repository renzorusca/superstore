const getState = scope => {
	return {
		store: {
			totalcart: [],
			cart: [],

			products: [
				{
					code: "000001",
					category: "0",
					title: "Elite Type-C USB 3.1 Flash",
					description_short:
						"Get the most out of the Type-C port on your new computer or mobile device. Experience USB 3.1 SuperSpeed technology with transfer speeds up to 130MB/s.",
					description:
						"Get the most out of the Type-C port on your new computer or mobile device. Experience USB 3.1 SuperSpeed technology with transfer speeds up to 130MB/sec! It is ideal for for easily storing and quickly transferring all your large documents, high-resolution photos, HD videos, and other digital content. Not only does PNY's new Elite Type-C USB 3.1 Flash Drive offer the same ease-of-use and plug-and-play capabilities as previous generations of USB technologies, it is also compatible with the newest Type-C host devices on the market. PNY's Elite Type-C USB 3.1 Flash Drive is designed with convenience and portability in mind. Because there is no up or down orientation, the Type-C USB is easier to use than ever before. Best of all, it is compatible across different operating systems such as iOS, Android, Windows, and Google, making USB Type-C a truly universal connection. This Elite Type-C USB 3.1 Flash Drive is small in size, but big on performance!",
					inventory: 55,
					qty: 1,
					price: 129.99,
					images: [
						"/000001-1.png",
						"/000001-2.png",
						"/000001-3.png",
						"/000001-4.png",
						"/000001-5.png"
					],
					review: 5,
					other: ""
				},
				{
					code: "000002",
					category: "0",
					title: "Elite-X Fit USB 3.0 Flash Drive",
					description_short:
						"PNY's Elite-X Fit USB 3.0 is built for maximum Speed & Convenience. Get the most out of the USB 3.0 port on your computer. Experience USB 3.0 next generation speed.",
					description:
						"PNY's Elite-X Fit USB 3.0 is built for maximum Speed & Convenience. Get the most out of the USB 3.0 port on your computer. Experience USB 3.0 next generation speed performance with transfer speeds up to 200MB/sec! It?s the perfect solution for easily storing and quickly transferring all your large documents, high-resolution photos, HD videos, and more. USB 3.0 offers the same ease-of-use and plug-and-play capabilities as previous generations of USB technologies, but with exceptional speed improvements. Designed for Reliable Portable Storage, PNY's Elite-X Fit USB 3.0 Flash Drive is designed with convenience and portability in mind. The Elite-X Fit's micro-sized, low profile design is perfect for long-stay applications; it can be left in a PC or laptop's USB port for an extended period of time, without interfering with everyday usage. Available in 32GB-128GB capacities.",
					inventory: 123,
					qty: 1,
					price: 34.99,
					images: [
						"/000002-1.png",
						"/000002-2.png",
						"/000002-3.png",
						"/000002-4.png",
						"/000002-5.png"
					],
					review: 4,
					other: ""
				},
				{
					code: "000003",
					category: "0",
					title: "HP x900w USB 3.0 Flash",
					description_short:
						"HP PRO Elite USB 3.0 is Built for Speed & Convenience. Get the most out of the USB 3.0 port on your new computer. Experience USB 3.0 next generation speed performance.",
					description:
						"HP PRO Elite USB 3.0 is Built for Speed & Convenience. Get the most out of the USB 3.0 port on your new computer. Experience USB 3.0 next generation speed performance with read speeds up to 400MB/sec and write speeds up to 180MB/sec! It’s the perfect solution for easily storing and quickly transferring all your large documents, high-resolution photos, HD videos, and more. USB 3.0 offers the same ease-of-use and plug-and-play capabilities as previous generations of USB technologies, but with exceptional speed improvements.Available in 128GB-512GB capacities.",
					inventory: 81,
					qty: 1,
					price: 49.99,
					images: [
						"/000003-4.png",
						"/000003-2.png",
						"/000003-3.png",
						"/000003-1.png",
						"/000003-5.png"
					],
					review: 5,
					other: ""
				},
				{
					code: "000004",
					category: "0",
					title: "PRO Elite USB 3.0 Flash Drive",
					description_short:
						"PNY's PRO Elite USB 3.0 is Built for Speed & Convenience. Get the most out of the USB 3.0 port on your new computer. Experience USB 3.0 next generation speed performance.",
					description:
						"PNY's PRO Elite USB 3.0 is Built for Speed & Convenience. Get the most out of the USB 3.0 port on your new computer. Experience USB 3.0 next generation speed performance with read speeds up to 400MB/sec and write speeds up to 180MB/sec! It’s the perfect solution for easily storing and quickly transferring all your large documents, high-resolution photos, HD videos, and more. USB 3.0 offers the same ease-of-use and plug-and-play capabilities as previous generations of USB technologies, but with exceptional speed improvements.Available in 128GB-512GB capacities.",
					inventory: 102,
					qty: 1,
					price: 19.5,
					images: [
						"/000004-1.png",
						"/000004-2.png",
						"/000004-3.png",
						"/000004-4.png",
						"/000004-5.png"
					],
					review: 5,
					other: ""
				},
				{
					code: "000011",
					category: "1",
					title: "Elite Performance SDXC Cl10",
					description_short:
						"PNY’s 512GB Class 10, UHS-1/ U3 SDXC is ideal for photo professionals and advanced photo enthusiasts who need ultra-fast transfer rates.  Capture every shot with speed.",
					description:
						"PNY’s 512GB Class 10, UHS-1/ U3 SDXC is ideal for photo professionals and advanced photo enthusiasts who need ultra-fast transfer rates.  Capture every shot with speeds up to 95MBs.  Perfect for capturing crisp, action photography with DSLR cameras and shooting high quality HD video.",
					inventory: 127,
					qty: 1,
					price: 149.99,
					images: [
						"/000011-1.png",
						"/000011-2.png",
						"/000011-3.png",
						"/000011-4.png",
						"/000011-5.png"
					],
					review: 5,
					other: ""
				},
				{
					code: "000012",
					category: "1",
					title: "CompactFlash Card 50MB/s",
					description_short:
						"With read and write speeds up to 50MB/s, PNY High Performance CompactFlash® cards deliver lightning fast speeds for capturing, storing and sharing high resolution photos.",
					description:
						"With read and write speeds up to 50MB/s, PNY High Performance CompactFlash® cards deliver lightning fast speeds for capturing, storing and sharing high resolution photos and 4K video. UDMA 7 Technology allows you to record vivid 4K Ultra HD video and photography. Experience content like never before with smooth, continuous recording and burst mode capabilities.",
					inventory: 129,
					qty: 1,
					price: 39.99,
					images: [
						"/000012-1.png",
						"/000012-2.png",
						"/000012-3.png",
						"/000012-4.png",
						"/000012-5.png"
					],
					review: 4,
					other: ""
				},
				{
					code: "000013",
					category: "1",
					title: "Elite-X miSDXC 100MB",
					description_short:
						"With the expanded usage of SD memory cards for storing applications and application data, there is a growing need for a combination of random and sequential performance levels.",
					description:
						"With the expanded usage of SD memory cards for storing applications and application data, there is a growing need for a combination of random and sequential performance levels. This demand becomes even stronger with the introduction of Android's Adopted Storage Device capability.Rated A1 for better app performance on Android(tm) devices, PNY Elite-X allows users to run apps faster and directly from the microSD card, saving more space on smartphones.",
					inventory: 56,
					qty: 1,
					price: 99.99,
					images: [
						"/000013-1.png",
						"/000013-2.png",
						"/000013-3.png",
						"/000013-4.png",
						"/000013-5.png"
					],
					review: 5,
					other: ""
				},
				{
					code: "000014",
					category: "1",
					title: "PRO Elite microSDXC Card",
					description_short:
						"PNY PRO Elite microSD Cards are the peak of performance for smartphones, tablets, action cameras, drones, DSLRs, video cameras and more. With a read speed of up to 95 MB/s",
					description:
						"PNY PRO Elite microSD Cards are the peak of performance for smartphones, tablets, action cameras, drones, DSLRs, video cameras and more. With a read speed of up to 95 MB/s and write speed of up to 90 MB/s, these cards deliver the speed you need to capture stunning video using the latest high-resolution standards, ready for today’s 4K Ultra-HD devices. Experience memories that feel as real as the day you captured them. Enjoy more mobile content such as 4K videos, HD pictures, music, apps and more. PNY PRO Elite microSD cards are Class 10/U3 speed rated, which provides fast transfer speeds so you can quickly transfer and share your content.",
					inventory: 45,
					qty: 1,
					price: 49.99,
					images: [
						"/000014-1.png",
						"/000014-2.png",
						"/000014-3.png",
						"/000014-4.png",
						"/000014-5.png"
					],
					review: 5,
					other: ""
				},
				{
					code: "000021",
					category: "2",
					title: "CS2211 2.5 SATA III SSD",
					description_short:
						"Upgrade to a PNY SSD to experience PC performance that's up to 20x faster than a traditional HDD. Featuring no moving parts, PNY SSDs complete random operations.",
					description:
						"Upgrade to a PNY SSD to experience PC performance that's up to 20x faster than a traditional HDD. Featuring no moving parts, PNY SSDs complete random operations rapidly. You PC will feel brand new with faster boot up time, quick application launch, and a better overall computing experience.",
					inventory: 354,
					qty: 1,
					price: 179.99,
					images: [
						"/000021-1.png",
						"/000021-2.png",
						"/000021-3.png",
						"/000021-4.png",
						"/000021-5.png"
					],
					review: 5,
					other: ""
				},
				{
					code: "000022",
					category: "2",
					title: "CS900 2.5 480MB SATA III SSD",
					description_short:
						"PNY is an SSD solution provider with lifecycle product management to JEDEC standards. With a world class SSD engineering team based in Silicon Valley, we are well.",
					description:
						"PNY is an SSD solution provider with lifecycle product management to JEDEC standards. With a world class SSD engineering team based in Silicon Valley, we are well positioned to take advantage of emerging technologies. PNY SSDs are up to 30 times more robust than HDDs, making it less likely to fail in extreme environments, including high and low temperatures. The non-volatile NAND in the system enables the SSD to retain its memory if your computer ever falls or is dropped.",
					inventory: 234,
					qty: 1,
					price: 169.99,
					images: [
						"/000022-1.png",
						"/000022-2.png",
						"/000022-3.png",
						"/000022-4.png",
						"/000022-5.png"
					],
					review: 5,
					other: ""
				},
				{
					code: "000023",
					category: "2",
					title: "CS1311 2.5 SATA III 2TB SSD",
					description_short:
						"Upgrade your laptop or desktop computer and feel the difference with super-fast OS boot times and speedy application loads. The CS1311 offers exceptional performance.",
					description:
						"Upgrade your laptop or desktop computer and feel the difference with super-fast OS boot times and speedy application loads. The CS1311 offers exceptional performance with speeds up to 550 MB/s seq. read and 530 MB/s seq. write. Our SSDs undergo some of the most rigorous durability and validation testing in the industry, withstanding hundreds of qualification tests and over 10,000 hours of validation testing. Each SSD is guaranteed to meet the requirements of even the most demanding applications.",
					inventory: 70,
					qty: 1,
					price: 449.99,
					images: [
						"/000023-1.png",
						"/000023-2.png",
						"/000023-3.png",
						"/000023-4.png",
						"/000023-5.png"
					],
					review: 5,
					other: ""
				},
				{
					code: "000024",
					category: "2",
					title: "CS2030 M.2 PCIe NVMe SSD",
					description_short:
						"PNY is an SSD solution provider with lifecycle product management to JEDEC standards. With a world class SSD engineering team based in Silicon Valley, we are well.",
					description:
						"PNY is an SSD solution provider with lifecycle product management to JEDEC standards. With a world class SSD engineering team based in Silicon Valley, we are well positioned to take advantage of emerging technologies. PNY SSDs are up to 30 times more robust than HDDs, making it less likely to fail in extreme environments, including high and low temperatures. The non-volatile NAND in the system enables the SSD to retain its memory if your computer ever falls or is dropped.",
					inventory: 520,
					qty: 1,
					price: 329.99,
					images: [
						"/000024-1.png",
						"/000024-2.png",
						"/000024-3.png",
						"/000024-4.png",
						"/000024-5.png"
					],
					review: 5,
					other: ""
				},
				{
					code: "000031",
					category: "3",
					title: "XLR8 DDR4 3200 Mhz Memory",
					description_short:
						"You take your PC to the extreme for one purpose: to destroy the competition. PNY has your back with its elite DDR4 3200MHz CL 16 desktop memory upgrade for desktops.",
					description:
						"You take your PC to the extreme for one purpose: to destroy the competition. PNY has your back with its elite DDR4 3200MHz CL 16 desktop memory upgrade. PNY’s premium Anarchy X modules combine top-tier components and select ICs for aggressive speed, low latency, bullet-proof reliability, and the extreme overclocking capabilities that serious gamers demand. Overclocking is made easier with Intel® XMP compatibility. And PNY’s radically stylish XLR8 heat spreaders dispense with the heat of battle and look fierce doing it.",
					inventory: 324,
					qty: 1,
					price: 219.99,
					images: [
						"/000031-1.png",
						"/000031-2.png",
						"/000031-3.png",
						"/000031-4.png",
						"/000031-5.png"
					],
					review: 5,
					other: ""
				},
				{
					code: "000032",
					category: "3",
					title: "Performance DDR3 1600Mhz Memory",
					description_short:
						"Want to work with the latest memory-intensive applications like graphic design and video-editing tools? Like to keep lots of browser windows open for work, school.",
					description:
						"Want to work with the latest memory-intensive applications like graphic design and video-editing tools? Like to keep lots of browser windows open for work, school, or play? Is your PC having trouble keeping up? A DDR3L 1600MHz CL 11 memory upgrade from PNY gives you the speed you need to get the most out of your current Windows notebook PC.",
					inventory: 234,
					qty: 1,
					price: 66.99,
					images: [
						"/000032-1.png",
						"/000032-2.png",
						"/000032-3.png",
						"/000032-4.png",
						"/000032-5.png"
					],
					review: 4,
					other: ""
				},
				{
					code: "000033",
					category: "3",
					title: "XLR8 DDR4 2400Mhz Memory",
					description_short:
						"If overclocking is your game, PNY’s Anarchy DDR4 2400MHz CL 15 has you covered with impressive performance, rock-solid reliability, and great looks.",
					description:
						"If overclocking is your game, PNY’s Anarchy DDR4 2400MHz CL 15 has you covered with impressive performance, rock-solid reliability, and great looks to boot. PNY’s high-performance Anarchy series modules combine tightly screened components and select ICs for aggressive speed, low latency, stability, and the high-end overclocking capabilities gamers and PC enthusiasts demand. PNY’s aggressively styled XLR8 heat spreaders keep your modified custom PC running cool and looking fierce.",
					inventory: 120,
					qty: 1,
					price: 199.99,
					images: [
						"/000033-1.png",
						"/000033-2.png",
						"/000033-3.png",
						"/000033-4.png",
						"/000033-5.png"
					],
					review: 5,
					other: ""
				},
				{
					code: "000034",
					category: "3",
					title: "Performance DDR3 1600Mhz Memory",
					description_short:
						"PNY’s Performance line of DDR3 RAM modules is purpose-built for users who want rock-solid reliability and great value. For more than 30 years. PNY has been.",
					description:
						"PNY’s Performance line of DDR3 RAM modules is purpose-built for users who want rock-solid reliability and great value. For more than 30 years, PNY has been rigorously sourcing, testing, and manufacturing memory upgrades for thousands of the most popular PC platforms. No matter what you do on your PC, you'll do it better and faster with a DDR3 1600MHz CL 11 upgrade from PNY.",
					inventory: 59,
					qty: 1,
					price: 59.99,
					images: [
						"/000034-1.png",
						"/000034-2.png",
						"/000034-3.png",
						"/000034-4.png",
						"/000034-5.png"
					],
					review: 5,
					other: ""
				}
			],
			productshome: [
				{
					title: "The best products",
					background: "white",
					initial: "white"
				}
			],
			authToken: "",
			validated: "",
			contact: [
				{
					dummy1: "super-E-store",
					dummy2: "Contact us",
					caddress: "627 SW 27th Ave",
					ccity: "Miami",
					cstate: "FL",
					czip: "33135",
					cphone1: "786-999-9999",
					cphone2: "305-888-8888"
				}
			],
			categories: [
				{
					code: 0,
					description: "Flash Drives"
				},
				{
					code: 1,
					description: "Flash Cards"
				},
				{
					code: 2,
					description: "Solid State Drives"
				},
				{
					code: 3,
					description: "DRAM Memory"
				}
			],
			tax: 7,
			shipping: 10
		},

		actions: {
			/* Find Product */

			addToCart: product => {
				let store = scope.state.store;
				store.cart.push({
					code: product.code,
					image: product.images[0],
					title: product.title,
					qty: product.qty,
					price: product.price,
					subtotal: product.price * product.qty
				});

				var wkSubtotal = 0;
				for (var i = 0; i < store.cart.length; i++) {
					wkSubtotal = wkSubtotal + store.cart[i].subtotal;
				}

				var wkTax = (wkSubtotal * store.tax) / 100;

				store.totalcart = [];

				store.totalcart.push({
					subtotal: wkSubtotal.toFixed(2),
					tax: wkTax.toFixed(2),
					shipping: store.shipping.toFixed(2),
					grandtotal: (wkSubtotal + wkTax + store.shipping).toFixed(2)
				});

				scope.setState({ store });
				return;
			},

			addToCartOriginal: product => {
				let store = scope.state.store;
				store.cart.push({
					code: product.code,
					image: product.images[0],
					title: product.title,
					description: product.description_short,
					qty: product.qty,
					price: product.price,
					subtotal: product.price * product.qty
				});
				scope.setState({ store });
				return;
			},

			getTotals: product => {
				let store = scope.state.store;
				let totals = [0, 0, 0, 0];
				let i = 0;
				for (i = 0; i < store.cart.length; i++) {
					totals[0] = totals[0] + store.cart.subtotal[i];
				}
				alert(totals[0]);
				totals[1] = 0;
				totals[2] = 0;
				totals[3] = totals[0] + totals[1] + totals[2] + totals[3];
				return totals;
			},

			getProductsByToken: tokenID => {
				let store = scope.state.store;
				let eventArray = store.products.filter(item => {
					let postitle = item.title
						.toUpperCase()
						.indexOf(tokenID.toUpperCase());

					let poscode = item.code.indexOf(tokenID);

					if (postitle !== -1 || poscode !== -1) {
						return item;
					}
				});

				return eventArray;
			},

			getProducts: categoryID => {
				let store = scope.state.store;
				let eventArray = store.products.filter(item => {
					if (item.category == categoryID) {
						return item;
					}
				});

				return eventArray;
			},

			getCart: productID => {
				let store = scope.state.store;
				let tempcode = store.cart.filter(item => {
					if (item.code !== "") {
						return item;
					}
				});
				return tempcode;
			},

			getDetails: productID => {
				let store = scope.state.store;
				let tempcode = store.products.filter(item => {
					if (item.code == productID) {
						return item;
					}
				});
				return tempcode;
			},

			getCategoryDescription: categoryCode => {
				let store = scope.state.store;
				let eventArray = store.categories.filter(item => {
					if (item.code == categoryCode) {
						return item;
					}
				});

				return eventArray;
			},

			findProduct: productID => {
				let store = scope.state.store;
				if (store.products !== []) {
					let product = store.products.filter((item, index) => {
						if (item.code === productID) {
							return item;
						}
					});

					if (product[0] !== undefined) {
						return product[0].title, product[0].description;
					}
				}
			}
		}
	};
};

export default getState;
