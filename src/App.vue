<template>
  <form action="#" id="uForm" @submit.prevent="onSubmit">
    <fieldset>
      <div class="form-item" :class="{ error__input: $v.user.name.$error }">
        <label> Имя </label>
        <input
          class="input__item"
          name="Name"
          v-model="user.name"
          placeholder="Имя"
          @change="$v.user.name.$touch()"
          autofocus
        />
        <div class="error" v-if="!$v.user.name.required">Обязательное поле</div>
        <div class="error" v-if="!$v.user.name.minLength">
          Минимум 4 символа
        </div>
      </div>
      <div class="form-item" :class="{ error__input: $v.user.surname.$error }">
        <label> Фамилия </label>
        <input
          class="input__item"
          name="Surname"
          v-model="user.surname"
          placeholder="Фамилия"
          @change="$v.user.surname.$touch()"
        />
        <div class="error" v-if="!$v.user.surname.required">
          Обязательное поле
        </div>
        <div class="error" v-else-if="!$v.user.surname.minLength">
          Минимум 4 символа
        </div>
      </div>
      <div
        class="form-item"
        :class="{ error__input: $v.user.middlename.$error }"
      >
        <label> Отчество </label>
        <input
          class="input__item"
          name="Middlename"
          v-model="user.middlename"
          placeholder="Отчество"
          @change="$v.user.middlename.$touch()"
        />
        <div class="error" v-if="!$v.user.middlename.minLength">
          Минимум 4 символа
        </div>
      </div>
      <div class="form-item" :class="{ error__input: $v.user.birthday.$error }">
        <label> Дата рождения </label>
        <input
          class="input__item"
          type="date"
          v-model="user.birthday"
          name="Birthday"
          placeholder="Дата рождения"
          @change="$v.user.birthday.$touch()"
        />
        <div class="error" v-if="!$v.user.birthday.required">
          Обязательное поле
        </div>
      </div>
      <div class="form-item" :class="{ error__input: $v.user.phone.$error }">
        <label> Номер телефона </label>
        <input
          class="input__item"
          v-model="user.phone"
          name="Phone"
          placeholder="+70000000000"
          @change="$v.user.phone.$touch()"
        />
        <div class="error" v-if="!$v.user.phone.numeric">
          Заполните правильно +7...
        </div>
        <div
          class="error"
          v-else-if="!$v.user.phone.minLength || !$v.user.phone.maxLength"
        >
          Введите номер, начиная с +7
        </div>
      </div>
      <div
        class="form-item form-item__radio"
        :class="{ error__input: $v.user.gender.$error }"
      >
        <label>Пол </label>
        <span class="form-span"> М </span>
        <input
          class="radio-input"
          type="radio"
          name="Gender"
          value="male"
          v-model="user.gender"
          @change="$v.user.gender.$touch()"
        />
        <span class="form-span"> Ж </span>
        <input
          class="radio-input"
          type="radio"
          name="Gender"
          value="female"
          v-model="user.gender"
          @change="$v.user.gender.$touch()"
        />
        <div class="error" v-if="!$v.user.gender.required">Выберете пол</div>
      </div>
      <div class="form-item">
        <label>Группа клиентов</label>
        <span class="form-span">VIP</span>
        <input
          class="input-checkbox"
          type="checkbox"
          name="group"
          value="VIP"
          v-model="user.group.vip"
        />
        <span class="form-span">Проблемные</span>
        <input
          type="checkbox"
          name="group"
          value="Problem"
          v-model="user.group.problem"
        />
        <span class="form-span"> ОМС</span>
        <input
          type="checkbox"
          name="group"
          value="OMS"
          v-model="user.group.oms"
        />
      </div>
      <div
        class="form-item"
        :class="{ error__input: $v.user.doctor.$error }"
      >
        <label> Лечащий врач </label>
        <select
          class="input__item"
          name="doctor"
          v-model="user.doctor"
          @change="$v.user.doctor.$touch()"
        >
          <option value="Иванов">Иванов</option>
          <option value="Захаров">Захаров</option>
          <option value="Чернышева">Чернышева</option>
        </select>
        <div class="error" v-if="!$v.user.doctor.required">
          Выберите документ
        </div>
      </div>
      <div class="form-item">
        <label
          ><span class="form-span"> Не отправлять СМС</span>
          <input type="checkbox" name="notSms" v-model="user.notSms" />
        </label>
      </div>
    </fieldset>
    <fieldset>
      <div
        class="form-item"
        :class="{ error__input: $v.user.adress.postIndex.$error }"
      >
        <label>Индекс</label>
        <input
          class="input__item"
          name="postIndex"
          v-model="user.adress.postIndex"
          placeholder="Индекс"
          @change="$v.user.adress.postIndex.$touch()"
        />
        <div
          class="error"
          v-if="
            !$v.user.adress.postIndex.minLength ||
            !$v.user.adress.postIndex.maxLength ||
            !$v.user.adress.postIndex.numeric
          "
        >
          Индекс должен состоять из 6 цифр
        </div>
      </div>
      <div
        class="form-item"
        :class="{ error__input: $v.user.adress.country.$error }"
      >
        <label> Страна </label>
        <input
          class="input__item"
          name="country"
          placeholder="Страна"
          v-model="user.adress.country"
          @change="$v.user.adress.country.$touch()"
        />
        <div class="error" v-if="!$v.user.adress.country.minLength">
          Минимум 4 символа
        </div>
      </div>
      <div
        class="form-item"
        :class="{ error__input: $v.user.adress.area.$error }"
      >
        <label> Область </label>
        <input
          class="input__item"
          name="area"
          placeholder="Область"
          v-model="user.adress.area"
          @change="$v.user.adress.area.$touch()"
        />
        <div class="error" v-if="!$v.user.adress.area.minLength">
          Минимум 4 символа
        </div>
      </div>
      <div
        class="form-item"
        :class="{ error__input: $v.user.adress.city.$error }"
      >
        <label> Город </label>
        <input
          class="input__item"
          name="city"
          placeholder="Город"
          v-model="user.adress.city"
          @change="$v.user.adress.city.$touch()"
        />
        <div class="error" v-if="!$v.user.adress.city.required">
          Обязательное поле
        </div>
        <div class="error" v-if="!$v.user.adress.city.minLength">
          Минимум 4 символа
        </div>
      </div>
      <div
        class="form-item"
        :class="{ error__input: $v.user.adress.street.$error }"
      >
        <label> Улица </label>
        <input
          class="input__item"
          name="street"
          placeholder="Улица"
          v-model="user.adress.street"
          @change="$v.user.adress.street.$touch()"
        />
        <div class="error" v-if="!$v.user.adress.street.minLength">
          Минимум 4 символа
        </div>
      </div>
      <div class="form-item">
        <label> Дом </label>
        <input
          class="input__item"
          name="house"
          placeholder="Дом"
          v-model="user.adress.house"
        />
      </div>
    </fieldset>
    <fieldset>
      <div
        class="form-item"
        :class="{ error__input: $v.user.document.type.$error }"
      >
        <label> Тип документа </label>
        <select
          class="input__item"
          name="type"
          v-model="user.document.type"
          @change="$v.user.document.type.$touch()"
        >
          <option value="Паспорт">Паспорт</option>
          <option value="Свидетельство о рождении">
            Свидетельство о рождении
          </option>
          <option value="Водительское удостоверение">
            Водительское удостоверение
          </option>
        </select>
        <div class="error" v-if="!$v.user.document.type.required">
          Выберите документ
        </div>
      </div>
      <div
        class="form-item"
        :class="{ error__input: $v.user.document.series.$error }"
      >
        <label> Серия </label>
        <input
          class="input__item"
          name="series"
          placeholder="Серия"
          v-model="user.document.series"
          @change="$v.user.document.series.$touch()"
        />
        <div
          class="error"
          v-if="
            !$v.user.document.series.minLength ||
            !$v.user.document.series.maxLength
          "
        >
          Поле содержит 4 символа
        </div>
      </div>
      <div
        class="form-item"
        :class="{ error__input: $v.user.document.number.$error }"
      >
        <label> Номер </label>
        <input
          class="input__item"
          name="number"
          placeholder="Номер"
          v-model="user.document.number"
          @change="$v.user.document.number.$touch()"
        />
        <div class="error" v-if="!$v.user.document.number.minLength">
          Минимум 4 символа
        </div>
      </div>
      <div
        class="form-item"
        :class="{ error__input: $v.user.document.whoGiv.$error }"
      >
        <label> Кем выдан </label>
        <input
          class="input__item"
          name="whoGiv"
          placeholder="Кем выдан"
          v-model="user.document.whoGiv"
          @change="$v.user.document.whoGiv.$touch()"
        />
        <div class="error" v-if="!$v.user.document.whoGiv.minLength">
          Минимум 4 символа
        </div>
      </div>
      <div
        class="form-item"
        :class="{ error__input: $v.user.document.dateGiv.$error }"
      >
        <label> Дата выдачи </label>
        <input
          class="input__item"
          type="date"
          v-model="user.document.dateGiv"
          name="dateGiv"
          @change="$v.user.document.dateGiv.$touch()"
        />
      </div>
    </fieldset>
    <p class="form-p_error" v-if="submitStatus === 'ERROR'">
      Заполните форму корректно
    </p>
    <button class="buttonForm" type="submit">Создать пользователя</button>
    <div class="div_success" v-if="submitStatus === 'OK'">
      <p> Пользователь 
        <strong>
        {{ this.user.name }}
        {{ this.user.surname }}
     </strong>
     успешно создан! </p>
     <p>Всех пользователей можете увидеть в консоли</p>
    </div>
  </form>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";

export default {
  data: () => ({
    users: [],
    submitStatus: null,
    user: {
      name: null,
      surname: null,
      middlename: null,
      birthday: null,
      phone: null,
      gender: null,
      group: {
        vip: null,
        problem: null,
        oms: null,
      },
      doctor: null,
      notSms: null,
      adress: {
        postIndex: null,
        country: null,
        area: null,
        city: null,
        street: null,
        house: null,
      },
      document: {
        type: null,
        series: null,
        number: null,
        whoGiv: null,
        dateGiv: null,
      },
    },
  }),
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(4),
      },
      surname: {
        required,
        minLength: minLength(4),
      },
      middlename: {
        minLength: minLength(4),
      },
      birthday: {
        required,
      },
      phone: {
        minLength: minLength(12),
        maxLength: maxLength(12),
      },
      gender: {
        required,
      },
      doctor: {
        required,
      },
      adress: {
        postIndex: {
          numeric,
          minLength: minLength(6),
          maxLength: maxLength(6),
        },
        country: {
          minLength: minLength(4),
        },
        area: {
          minLength: minLength(4),
        },
        city: {
          required,
          minLength: minLength(4),
        },
        street: {
          minLength: minLength(4),
        },
      },
      document: {
        type: {
          required,
        },
        series: {
          minLength: minLength(4),
          maxLength: maxLength(4),
        },
        number: {},
        whoGiv: {},
        dateGiv: {},
      },
    },
  },
  methods: {
    onSubmit(event) {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        console.log(this.users);
        let newUser = this.user;
        this.users.push(newUser);
        console.log(this.users);
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
        event.target.reset();
      }
    },
  },
};
</script>

<style lang="sass">
$font-doc: Roboto, sans-serif

body
  font: 100% $font-doc
  margin: 0
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: center

label
  display: block
  box-sizing: border-box
  font-size: 9px
  text-align: left
  max-width: 500px
  margin-bottom: 3px
  letter-spacing: 1px
  color: grey

p
  margin: 0

form
  margin: 0 auto
  width: 70vw
  display: flex
  flex-direction: row
  flex-wrap: wrap
  border: 0
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3)
  transition: 0.3s box-shadow
  padding: 15px
  justify-content: space-around
  position: relative

fieldset
  display: flex
  flex-direction: column
  justify-content: center
  border: none
  padding: 0
  margin: 0
  margin-bottom: 30px
  min-width: 300px

input,
select
  padding: 5px 10px
  margin: 5px 0
  font-size: 10px
  box-sizing: border-box

input:focus
  outline: none

.buttonForm
  background: #41b883
  color: white
  padding: 10px 20px
  text-transform: uppercase
  font-weight: bold
  width: 100%
  border: 0
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3)
  transition: 0.3s box-shadow
  outline: none

  &:hover
    background: #349469
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5)

  &:active
    background: #41b883
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3)
    outline: none

.input__item
  background-color: #fafafa
  border: 0
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3)
  transition: 0.3s box-shadow
  margin-bottom: 13px
  width: 300px

  &:hover
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5)

  &:active
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.7)


div.form-item .error
    display: none

div.form-item.error__input .error
    display: block

.error
    color: #f57f6c
    font-size: 10px
    text-align: end
    padding-right: 10px
    margin-top: -13px

.form-item
    box-sizing: border-box
    
    &__radio
    width: 300px

.error__input .input__item
  color: #f57f6c
  box-shadow: 0 0 4px rgb(245, 127, 108, 0.7)

  &:hover
      box-shadow: 0 0 4px rgb(245, 127, 108, 0.3)

.form-span
    color: grey
    font-size: 17px
    text-align: left
    padding: 0 5px 0 20px

.radio-input
    margin-bottom: 11px

.input-checkbox
    margin-bottom: 11px

.div_success
    position: fixed
    min-height: 200px
    bottom: 40%
    background-color: #afe3cb
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3)
    border: 1px solid grey
    transition: 0.3s box-shadow
    padding: 40px 15px 15px 15px
    box-sizing: border-box
    text-align: center

.form-p_error
    margin-top: -29px
    color: #f57f6c
    text-transform: uppercase
    margin-bottom: 10px
    font-weight: 700
    text-align: center
    width: 100%
  

@media screen and (max-device-width: 500px)
    form
      width: 100%
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.3)
      padding: 0

    button
      height: 15vh
</style>
