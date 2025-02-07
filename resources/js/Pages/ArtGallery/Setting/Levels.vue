<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Admin/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
</script>

<template>
    <Head title="Art Gallery" />

    <BreezeAuthenticatedLayout>
        <template #header></template>
        <div class="py-4 px-4">
            <div class="overflow-x-auto">
                <div class="mx-auto">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex justify-end pb-4 relative text-gray-400 focus-within:text-gray-600 items-center">
                            <div class="flex">
                                <BreezeButton class="py-2 px-4" @click="create">New Level</BreezeButton>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="align-middle inline-block min-w-full">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-300">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/14">#</th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14">Name</th>
                                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-2/14">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr v-if="!$page.props.levels">
                                            <td class="text-center" colspan="10">
                                                <div class="p-3">
                                                    No Record Found! 
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr class="hover:bg-gray-200" v-for="(result, index) in $page.props.levels" :key="result.id">
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm font-medium text-gray-700">{{ ++index }}</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm font-medium text-gray-900">{{ result.name }}</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                <div class="flex justify-center space-x-2">
                                                    <BreezeButton buttonType="warning" class="py-1 px-2" @click="edit(result.id, result.name)">Edit</BreezeButton>
                                                    <BreezeButton buttonType="danger" @click="destroy(result.id)">Delete</BreezeButton>
                                                    <BreezeButton buttonType="blue" class="py-1 px-2" @click="viewThemes(result.id)">View Themes</BreezeButton>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="space-y-2" v-if="show_create">
                            <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                                <div class="mb-5 border-b-indigo-500 border-b border-dashed">
                                    <h2 class="font-display font-bold text-indigo-600">Add Level</h2>
                                </div>
                                <div class="grid grid-cols-1 gap-0 sm:gap-4">
                                    <div class="mb-4">
                                        <label for="level_name" class="block text-sm text-gray-700 font-bold"> Name <span class="text-red-500">*</span></label>
                                        <div class="mt-1 flex rounded-md shadow-sm">
                                            <input type="text" name="level_name" id="level_name" class="focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm" :class="errors.level_name ? 'border-red-300' : 'border-gray-300'" v-model="form.level_name" autocomplete="off"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md">
                                <div class="flex justify-end">
                                    <BreezeButton @click="store">Save</BreezeButton>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-2" v-if="show_edit">
                            <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                                <div class="mb-5 border-b-indigo-500 border-b border-dashed">
                                    <h2 class="font-display font-bold text-indigo-600">Edit Level</h2>
                                </div>
                                <div class="grid grid-cols-1 gap-0 sm:gap-4">
                                    <div class="mb-4">
                                        <label for="level_name" class="block text-sm text-gray-700 font-bold"> Name <span class="text-red-500">*</span></label>
                                        <div class="mt-1 flex rounded-md shadow-sm">
                                            <input type="text" name="level_name" id="level_name" class="focus:ring-0 focus:border-indigo-300 flex-1 block w-full rounded-md sm:text-sm" :class="errors.level_name ? 'border-red-300' : 'border-gray-300'" v-model="form.level_name" autocomplete="off"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md">
                                <div class="flex justify-end">
                                    <BreezeButton @click="update">Save</BreezeButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmationModal 
                :show="isOpen" 
                @close="isOpen = false"
                confirmationAlert="danger"
                confirmationTitle="Delete Level"
                confirmationText="Are you sure want to delete this level?"
                confirmationButton="Delete"
                confirmationMethod="delete"
                :confirmationRoute="confirmationRoute"
                :confirmationData="confirmationData"
            />
        </div>
    </BreezeAuthenticatedLayout>
</template>

<script>
import { SearchIcon, TrashIcon, PencilIcon } from '@heroicons/vue/solid'
import { Head, Link } from '@inertiajs/inertia-vue3';
import ConfirmationModal from '@/Components/ConfirmationModal.vue'
import Pagination from '@/Components/Pagination.vue'
import axios from 'axios'
import Modal from '@/Components/Modal.vue'
import { debounce } from 'vue-debounce'

export default {
    components: {
        SearchIcon, TrashIcon, PencilIcon,
        ConfirmationModal, Head, Link, Modal, Pagination
    },
    data(){
        return{
            isOpen: false,
            confirmationData: '',
            confirmationRoute: '',
            show_create: false,
            show_edit: false,
            form:{
                id: '',
                level_name: ''
            },
            errors:{
                level_name: false
            }
        }
    },
    methods: {
        viewThemes(level_id){
            this.$inertia.get(route('art_gallery.setting.themes'), {'level_id' : level_id})
        },
        create(){
            this.form.level_name    = ''
            this.show_create        = true
            this.show_edit          = false
        },
        store(){
            if(!this.form.level_name){
                this.errors.level_name = true
                return
            }
            this.$inertia.post(route('art_gallery.setting.levels.store'), this.form, {preserveState: false})
        },
        edit(id, level_name){
            this.form.id            = id
            this.form.level_name    = level_name
            this.show_edit          = true
            this.show_create        = false
        },
        update(){
            if(!this.form.level_name){
                this.errors.level_name = true
                return
            }
            this.$inertia.post(route('art_gallery.setting.levels.update'), this.form, {preserveState: false})
        },
        destroy(id){
            this.confirmationRoute = 'art_gallery.setting.levels.delete'
            this.confirmationData = id
            this.isOpen = true
        }
    }
}
</script>