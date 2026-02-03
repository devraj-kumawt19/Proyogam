fetch("/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "admin", password: "password" }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));