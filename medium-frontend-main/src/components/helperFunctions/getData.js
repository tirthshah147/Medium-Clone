export const postData = async(url_end_point, user_data) => {
	let response = await fetch(`http://localhost:8080/${url_end_point}`,{
		method:"POST",
		mode:"cors",
		credentials:"same-origin",
		headers:{
			'Content-Type':'application/json'
		},
    redirect:"follow",
    referrerPolicy:"no-referrer",
    body:user_data
	})
  console.log(response);
	return response;
}

