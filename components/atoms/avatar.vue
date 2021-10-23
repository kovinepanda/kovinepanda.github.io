<template>
  <div class="avatar-circle">
    <span class="initials">
        <slot />
    </span>
  </div>
</template>

<style scoped>
.avatar-circle {
  width: 2rem;
  height: 2rem;
  background-color: var(--primary);
  text-align: center;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
}

.initials {
  position: relative;
  top: 0.25rem;
  font-size: 1rem;
  line-height: 1rem;
  color: var(--contrast);
  font-weight: bold;
}
</style>
