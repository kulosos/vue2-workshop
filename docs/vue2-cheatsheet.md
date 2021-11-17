# Vue 2 Essentials Cheat Sheet (Typescript)

**Umgesetzt nach Vorgaben des DB Vendo WEB-Team (Stand: April 2021).**

Sources:

* [Vue.js official guide](https://vuejs.org/v2/guide/)
* [Vue reactivity](https://vuejs.org/v2/guide/reactivity.html)

Useful Chrome extensions:

* [Vue Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)

## Expressions

```html

<div id="app">
    <p>I have a {{ product }}</p>
    <p>{{ product + 's' }}</p>
    <p>{{ isWorking ? 'YES' : 'NO' }}</p>
    <p>{{ product.getSalePrice() }}</p>
</div>
```

## Binding

```html
<a v-bind:href="url">...</a>

<!-- Shorthand Syntax -->
<a :href="url">...</a>
```

True or false will add or remove attribute:

```html

<button :disabled="isButtonDisabled">... 
```

If isActive is truthy, the class ‘active’ will appear:

```html

<div :class="{ active: isActive }">...
```

Style color set to value of activeColor:

```html

<div :style="{ color: activeColor }">
```

## HTML directives

Element inserted/removed based on truthiness:

```html
<p v-if="inStock">{{ product }}</p>
<p v-else-if="onSale">...</p>
<p v-else>...</p>
```

Toggles the display: none CSS property:

```html
<p v-show="showProductDetails">...</p>
```

Two-way data binding:

```html
<input v-model="firstName">
```

## Action / Events

Calls addToCart method on component:

```html

<button v-on:click="addToCart">...

    <!-- Shorthand Syntax -->
    <button @click="addToCart">...
```

Arguments can be passed:

```html

<button @click="addToCart(product)">...
```

To prevent default behavior (e.g. page reload):

```html

<form @submit.prevent="addProduct">...
```

Only trigger once:

```html
<img @mouseover.once="showImage">...
```

* `.stop` Stop all event propagation:
* `.self` Only trigger if event.target is element itself

Keyboard entry example:

```html
<input @keyup.enter="submit">
```

Call onCopy when control-c is pressed:

```html
<input @keyup.ctrl.c="onCopy">
```

Key Modifiers:

* `.tab`
* `.up`
* `.down`
* `.left`
* `.right`
* `.delete`
* `.esc`
* `.space`
* `.ctrl`
* `.alt`
* `.shift`
* `.meta`

Mouse modifiers:

* `.left`
* `.right`
* `.middle`

## List Rendering

```html

<li v-for="item in items" :key="item.id">
    {{ item }}
</li>
```

To access the position in the array:

```html

<li v-for="(item, index) in items">...
```

To iterate through objects:

```html

<li v-for="(value, key) in object">...
```

Using v-for with a component:
To iterate through objects:

```html

<cart-product v-for="item in products"
              :product="item" :key="item.id">
```

## Component Anatomy

Single File Component (SFC) written in TypeScript using decorators (provided by package `vue-class-component`)

```vue
<template>
  <!-- only one wrapping root node is allowed in template (only Vue 2.x) -->
  <div class="my-component">
    <!-- add html content or components here -->
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from "vue";
import {Prop, Watch} from "vue-property-decorator";

@Component({
  components: {}
})
export default class MyComponent extends Vue {

  // props
  @Prop({required: false, type: Boolean})
  public myProp!: string = '';

  // data
  public myDataValue1: number = 123;
  public myDataValue2: string = 'my value 2';
  private isActive: boolean = true;

  // computed properties
  public get myComputedProperty(): number {
    return 42;
  }

  // methods
  public myFunction1(): void {
    // do stuff here ...
  }

  // watcher
  @Watch('isActive', { immediate: true })
  public myFunction2(): void {
    // watcher wil trigger automatically if "isActive"-Value changes
    // do stuff here ...
  }
}
</script>

<style scoped lang="scss">

.my-component {
  /* add stlyes here */
}

</style>
```

## Full Component Example

Single File Component (SFC) written in TypeScript using decorators (provided by package `vue-class-component`)

```vue

<template>
  <!-- only one wrapping root node is allowed in template (only Vue 2.x) -->
  <div class="cats-organizer">
    <!-- add html content or components here -->

    <!-- using boolean prop from code to enable/disable elements in UI -->
    <div v-if="isOrganizingActive"
         class="cats-organizer__wrapper">

      <div class="cats-organizer__cats-amount">
        <!-- using getter "catsAmount" from TypeScript-Code to output computed property -->
        <!-- using Mustage-Notation {{..}} to interpreting data in template -->
        <p>Amount of Cats: <span>{{ catsAmount }}</span></p>
        <!-- Output: "Amount of Cats: 23" -->
      </div>

      <div class="cats-organizer__cats-born-last-year">
        <!-- using getters "lastYear" and "catsBornInLastYear" to output computed properties -->
        <!-- using Mustage-Notation {{..}} to interpreting data in template -->
        <p>Cats born in {{ lastYear }}: <span>{{ catsBornInLastYear }}</span></p>
        <!-- Output: "Cats born in 2020: 4" -->
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from "vue";
import {Prop, Watch} from "vue-property-decorator";

// interfaces are usually defined as single file in the 'models' folder
interface Cat {
  name: string;
  birthday: Date;
}

@Component({
  components: {}
})
export default class CatsOrganizer extends Vue {

  // props
  @Prop({required: false, type: Boolean})
  public isOrganizingActive!: boolean;

  @Prop({required: true, type: Array})
  public cats: Cat[] = [];

  // data
  public catsOwner = {
    firstname: 'Cat',
    lastname: 'Stevens',
  };

  // computed properties 
  public get catsBornInLastYear(): Cat[] {
    return this.cats.filter(cat => cat.birthday.getFullYear() < this.lastYear);
  }

  public get catsAmount(): number {
    return this.cats.length;
  }

  public get lastYear(): number {
    return new Date().getFullYear() - 1;
  }

  // methods
  public myFunction1(): void {
    // do stuff here ...
  }

  // watchers
  @Watch
  public myFunction2(): void {
    // do stuff here ...
  }
}
</script>

<style scoped lang="scss">

.my-component {
  /* add stlyes here */
}

</style>

```
