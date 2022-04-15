<template>
    <div class="text-3xl text-white font-semibold mb-12">
        Add Album
    </div>

    <div class="space-y-4 mb-10">
        <div class="space-y-1">
            <label for="title" class="text-white">Name/Title</label>
            <input type="text" name="title" placeholder="My First Album" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full">
        </div>

        <div class="space-y-1">
            <label for="imageUrl" class="text-white">Image (URL)</label>
            <input type="text" name="imageUrl" placeholder="http:://image-album.com/example.jpg" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full">
        </div>

        <div class="space-y-1">
            <label for="publishYear" class="text-white">Publish Year</label>
            <input type="number" name="publishYear" placeholder="2022" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full">
        </div>
        
        <div class="space-y-1">
            <label for="description" class="text-white">Description</label>
            <textarea name="description" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full" placeholder="Describe the album" rows="3"></textarea>
        </div>
    </div>

    <div>
        <button class="py-2 px-3 w-full bg-primary-blue text-white font-semibold uppercase rounded active:bg-sky-500 duration-200">Save</button>
    </div>
</template>

<script>
export default {
    name: "album-form-view",
    data: () => ({
        album: {
            title: "",
            imageUrl: "",
            publishYear: "",
            description: ""
        }
    })
}
</script>

<style>

</style>