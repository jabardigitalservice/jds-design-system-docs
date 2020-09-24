<template>
  <div class="app:docs-sidebar__menu">
    <MenuList style="padding: 1rem">
      <MenuListGroup
        v-for="(group, groupIndex) in menuGroups"
        :key="groupIndex"
      >
        <template #activator>
          <MenuListItem v-bind="group">
            <template #icon>
              <MenuListItemIcon />
            </template>
            {{ group.label }}
          </MenuListItem>
        </template>
        <template v-if="group.children" #default>
          <MenuListItem
            v-for="(item, itemIndex) in group.children"
            :key="itemIndex"
            v-bind="item"
          >
            {{ item.label }}
          </MenuListItem>
        </template>
      </MenuListGroup>
    </MenuList>
  </div>
</template>

<script>
import MenuList from '~/components/@JDS/MenuList/MenuList'
import MenuListGroup from '~/components/@JDS/MenuList/MenuListGroup'
import MenuListItem from '~/components/@JDS/MenuList/MenuListItem'
import MenuListItemIcon from '~/components/@JDS/MenuList/MenuListItemIcon'

export default {
  components: {
    MenuList,
    MenuListGroup,
    MenuListItem,
    MenuListItemIcon,
  },
  data() {
    return {
      menuGroups: [
        {
          label: this.$t('label.start'),
          to: this.localePath('/dok'),
          exact: true,
        },
        {
          label: this.$t('label.design'),
          children: [
            {
              label: this.$t('label.typography'),
              to: this.localePath('/dok/desain/tipografi'),
            },
            {
              label: this.$t('label.colors'),
              to: this.localePath('/dok/desain/warna'),
            },
            {
              label: this.$t('label.iconography'),
              to: this.localePath('/dok/desain/ikonografi'),
            },
            {
              label: this.$t('label.layouting'),
              to: this.localePath('/dok/desain/layouting'),
            },
          ],
        },
        {
          label: this.$t('label.components'),
          children: [
            {
              label: 'A',
            },
            {
              label: 'B',
            },
          ],
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.app\:docs-sidebar__menu {
}
</style>
