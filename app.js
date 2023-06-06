      let tg = window.Telegram.WebApp;
      let buy = document.getElementById("buy");
      let order = document.getElementById("order");
      let ata = document.getElementById("ata");
      tg.expand();

      ata.addEventListener("click", () => {
       /* openTelegramLink(url'https://my-mint2021.github.io/cat.html');*/
        console.log('нажата кнопка');
      });



      buy.addEventListener("click", () => {
        document.getElementById("main").style.display = "none";
        document.getElementById("form").style.display = "flex";
        document.getElementById("user_name").value = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
      });

      order.addEventListener("click", () => {
      document.getElementById("error").innerText = '';
        let name = document.getElementById("user_name").value;
        let email = document.getElementById("user_email").value;
        let phone = document.getElementById("user_phone").value;
        if(name.length < 5) {
            document.getElementById("error").innerText = 'Ошибка в имени';
            return;
        }
        if(email.length < 5) {
            document.getElementById("error").innerText = 'Ошибка в email';
            return;
        }
        if(phone.length < 5) {
            document.getElementById("error").innerText = 'Ошибка в номере телефона';
            return;
        }

        let data = {
            name: name,
            email: email,
            phone: phone
        }
        tg.sendData(JSON.stringify(data));

        tg.close();
      });