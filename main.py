import json

from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo

bot = Bot('5933511346:AAFHj54YtWcC1RMAb31Xy50GQre1MpmoQCA')
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton('Открыть страницу', web_app=WebAppInfo(url='https://my-mint2021.github.io')))
    await message.answer('Привет, новый пользователь!!!', reply_markup=markup)

@dp.message_handler(content_types=['web_app_data'])
async def web_app(message: types.Message):
    res = json.loads(message.web_app_data.data)
    await message.answer(f'Name: {res["name"]}. Email: {res["email"]}. Phone: {res["phone"]}')

executor.start_polling(dp)