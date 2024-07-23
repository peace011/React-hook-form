import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from 'react';
import { FieldPath, useFieldArray, useForm } from 'react-hook-form';
import z from 'zod';

const schema = z.object({
  fullname: z.string().nonempty('fullname is required').min(3, "fullname must be at least 3 chars"),
  dob: z.string().nonempty('dob is required'),
  email: z.string().nonempty('email is required').email('email format is invalid'),
  // .refine(email => email !== 'admin@gmail.com', {
  //     message: "Admin emails are not allowed",
  //     path: ['email']
  // }),
  gender: z.string().nonempty('gender is required'),
  password: z.string().nonempty('password is required'),
  confirmpassword: z.string().nonempty('confirmpassword is required'),
  phone: z.array(z.object({
    number: z.string().nonempty('phone is required').length(10, 'Phone number must be at least 10 digits')
    .regex(/^9\d{9}$/, { message: 'Phone no. must be 10 digits and only numbers' }),   
     //^9: Ensures that the string starts with the digit 9
    //\d{9}: There is exactly 9 digits following the initial 9
    //$: Asserts that the string must end after these 10 characters (ensuring there are no extra characters).
  })),
  education: z.array(z.object({
    college: z.string().optional(),
    qualification: z.string().optional(),
    gpa: z.string().optional(),
  })),
  address: z.array(z.object({
    street: z.string().nonempty('street is required'),
    city: z.string().nonempty('city is required'),
    province: z.string().nonempty('province is required'),
    zipcode: z.string().nonempty('zipcode is required'),
    country: z.string().nonempty('country is required'),
  })),
  paddress: z.array(z.object({
    pstreet: z.string().nonempty('street is required'),
    pcity: z.string().nonempty('city is required'),
    pprovince: z.string().nonempty('province is required'),
    pzipcode: z.string().nonempty('zipcode is required'),
    pcountry: z.string().nonempty('country is required'),
  })),
  citizen: z.instanceof(File).nullable(),
  profile:z.instanceof(File).nullable(),
 
})
  .refine(data => data.password === data.confirmpassword, {
    message: "Passwords must match",
    path: ["confirmpassword"], // Path of the error message
  });

  type FromDataType=z.infer <typeof schema>;

const SignupPage:React.FC = () => {
  const { register, handleSubmit, watch, control, setValue, getValues, setError, reset, formState: { errors } } = useForm<FromDataType>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullname: '',
      dob: '',
      email:'',
      gender:'',
      password:'',
      confirmpassword:'',
      phone: [{ number: '' }],
      education: [{ college: '', qualification: '', gpa: '' }],
      paddress: [{ pstreet: '', pcity: '', pprovince: '', pzipcode: '', pcountry: '' }],
      address: [{ street: '', city: '', province: '', zipcode: '', country: '' }],
      citizen: null,
      profile:null,
    }
  });
  console.log(errors);

  const handleUploadFile=(e:React.ChangeEvent<HTMLInputElement>,field:FieldPath<FromDataType>)=>{
    if(e.target.files){
    const file=e.target.files[0];
    setValue(field,file);
    setPreview((prev)=>({...prev,[field]:URL.createObjectURL(file)}))}
  }


  const [preview,setPreview]=useState<{[key:string]:string | null}>({'citizen':null,'profile':null});
  // const file = watch('citizen');
  // console.log("watch file", file);
  const onSubmit = (data:any) => console.log(data);

  const { fields: phnfields, append: phnappend, remove: phnremove } = useFieldArray({   //destructuring and renaming it
    name: 'phone',
    control
  })
  const edufields = useFieldArray({
    name: 'education',
    control
  })
  const addressfields = useFieldArray({
    name: 'address',
    control
  })
  const paddressfields = useFieldArray({
    name: 'paddress',
    control
  })

  return (
    <div className='p-12'>
      <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-300 p-6 space-y-4' noValidate>
        <h2 className='text-lg font-semibold '>Personal Information</h2>
        <section className='grid sm:grid-cols-2 md:grid-cols-3  gap-4'>
          <div className="grid space-y-2">
            <label>Full Name</label>
            <input type='text' {...register('fullname', { required: true })} />
            {errors.fullname && <span className='text-xs text-red-500'>{errors.fullname.message}</span>}
          </div>
          <div className="grid space-y-2">
            <label > Date of Birth</label>
            <input type='date' {...register('dob', { required: true })} />
            {errors.dob && <span className='text-xs text-red-500'>{errors.dob.message}</span>}
          </div>
          <div className="grid space-y-2">
            <label > Email</label>
            <input type='email' {...register('email', { required: true })} />
            {errors.email && <span className='text-xs text-red-500'>{errors.email.message}</span>}
          </div>
          <div className="grid space-y-2">
            <label > Gender</label>
            <div className="">
              <input type='radio' value='male' {...register('gender', { required: true })} />
              <label > Male</label>
              <input type='radio' value='female' {...register('gender', { required: true })} />
              <label > Female</label>
              {errors.gender && <span className='text-xs text-red-500'>{errors.gender.message}</span>}
            </div>

          </div>
          <div className="space-y-2">
            <label > List of phone</label>
            {phnfields.map((field, index) => (
              <div className='grid' key={field.id}>
                <input type='number' {...register(`phone.${index}.number`, { required: true })} />
                {errors.phone && errors.phone[index] && errors.phone[index]!.number && <span className='text-xs text-red-500'>{errors.phone[index]!.number!.message}</span>}
                {index > 0 && (
                  <button type='button' onClick={() => phnremove(index)}>Remove Phn</button>
                )}
              </div>
            ))}
            <button type='button' onClick={() => phnappend({ number: '' })}>Add Phn</button>

          </div>
          <div className="grid space-y-2">
            <label > Password</label>
            <input type='password' {...register('password', { required: true })} />
            {errors.password && <span className='text-xs text-red-500'>{errors.password.message}</span>}
          </div>

          <div className="grid space-y-2">
            <label >Confirm Password</label>
            <input type='password' {...register('confirmpassword', { required: true })} />
            {errors.confirmpassword && <span className='text-xs text-red-500'>{errors.confirmpassword.message}</span>}
          </div>
        </section>

        <h2 className='text-lg font-semibold'>Address Information</h2>
        <section className='grid grid-cols-2 gap-4'>
          <div className="space-y-2">
            <h3 className='font-medium'>Permanent Address</h3>
            {paddressfields.fields.map((field, index) => (
              <div key={field.id} className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className="grid space-y-2">
                  <label > Street Line</label>
                  <input type='text' {...register(`paddress.${index}.pstreet`, { required: true })} />
                  {errors.paddress && errors.paddress[index]!.pstreet && <span className='text-xs text-red-500'>{errors.paddress[index]!.pstreet!.message}</span>}
                </div>
                <div className="grid space-y-2">
                  <label > City</label>
                  <input type='text' {...register(`paddress.${index}.pcity`, { required: true })} />
                  {errors.paddress && errors.paddress[index]!.pcity && <span className='text-xs text-red-500'>{errors.paddress[index]!.pcity!.message}</span>}
                </div>
                <div className="grid space-y-2">
                  <label > Province</label>
                  <input type='text' {...register(`paddress.${index}.pprovince`, { required: true })} />
                  {errors.paddress && errors.paddress[index]?.pprovince && <span className='text-xs text-red-500'>{errors.paddress[index]!.pprovince!.message}</span>}
                </div>
                <div className="grid space-y-2">
                  <label > Zip Code</label>
                  <input type='number' {...register(`paddress.${index}.pzipcode`, { required: true })} />
                  {errors.paddress && errors.paddress[index]?.pcity && <span className='text-xs text-red-500'>{errors.paddress[index]!.pzipcode!.message}</span>}
                </div>
                <div className="grid space-y-2">
                  <label > Country</label>
                  <select {...register(`paddress.${index}.pcountry`)}>
                    <option value=''>Select Country</option>
                    <option value='china'>China</option>
                    <option value='korea'>Korea</option>
                    <option value='is'>US</option>
                  </select>
                  {errors.paddress && errors.paddress[index]?.pcountry && <span className='text-xs text-red-500'>{errors.paddress[index]!.pcountry!.message}</span>}
                </div>
                {index > 0 && (
                  <button type='button' onClick={() => paddressfields.remove(index )}>Remove Adddress</button>
                )}
              </div>

            ))}

            <button type='button' onClick={() => paddressfields.append({ pstreet: '', pcity: '', pprovince: '', pzipcode: '', pcountry: '' })}>Add Address</button>

          </div>

          <div className="space-y-2">
            <h3 className='font-medium'>Temporary Address</h3>
            {addressfields.fields.map((field, index) => (
              <div key={field.id} className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className="grid space-y-2">
                  <label > Street Line</label>
                  <input type='text' {...register(`address.${index}.street`, { required: true })} />
                  {errors.address && errors.address[index]?.street && <span className='text-xs text-red-500'>{errors.address[index]!.street!.message}</span>}
                </div>
                <div className="grid space-y-2">
                  <label > City</label>
                  <input type='text' {...register(`address.${index}.city`, { required: true })} />
                  {errors.address && errors.address[index]?.city && <span className='text-xs text-red-500'>{errors.address[index]!.city!.message}</span>}
                </div>
                <div className="grid space-y-2">
                  <label > Province</label>
                  <input type='text' {...register(`address.${index}.province`, { required: true })} />
                  {errors.address && errors.address[index]?.province && <span className='text-xs text-red-500'>{errors.address[index]!.province!.message}</span>}
                </div>
                <div className="grid space-y-2">
                  <label > Zip Code</label>
                  <input type='number' {...register(`address.${index}.zipcode`, { required: true })} />
                  {errors.address && errors.address[index]?.city && <span className='text-xs text-red-500'>{errors.address[index]!.zipcode!.message}</span>}
                </div>
                <div className="grid space-y-2">
                  <label > Country</label>
                  <select {...register(`address.${index}.country`)}>
                    <option value=''>Select Country</option>
                    <option value='china'>China</option>
                    <option value='korea'>Korea</option>
                    <option value='is'>US</option>

                  </select>
                  {errors.address && errors.address[index]?.country && <span className='text-xs text-red-500'>{errors.address[index]!.country!.message}</span>}
                </div>
                {index > 0 && (
                  <button type='button' onClick={() => addressfields.remove(index)}>Remove Adddress</button>
                )}
              </div>

            ))}


            <button type='button' onClick={() => addressfields.append({ street: '', city: '', province: '', zipcode: '', country: '' })}>Add Adddress</button>

          </div>
        </section>

        <h2 className='text-lg font-semibold'>Education Information</h2>
        <section className='space-y-2'>
          {edufields.fields.map((field, index) => (
            <div className='grid grid-cols-3 gap-4' key={field.id}>
              <div className="grid space-y-2">
                <label>College</label>
                <input type='text' {...register(`education.${index}.college`)} />
                {errors.education && errors.education[index]!.college && <span className='text-xs text-red-500'>{errors.education[index]!.college!.message}</span>}
              </div>
              <div className="grid space-y-2">
                <label>Qualification</label>
                <input type='text' {...register(`education.${index}.qualification`)} />
                {errors.education && errors.education[index]!.qualification && <span className='text-xs text-red-500'>{errors.education[index]!.qualification!.message}</span>}
              </div>
              <div className="grid space-y-2">
                <label>GPA</label>
                <input type='number' {...register(`education.${index}.gpa`)} />
                {errors.education && errors.education[index]!.gpa && <span className='text-xs text-red-500'>{errors.education[index]!.gpa!.message}</span>}
              </div>
              {index > 0 && (
                <button type='button' onClick={() => edufields.remove(index)}>Remove Education</button>
              )}
            </div>
          ))}
          <button type='button' onClick={() => edufields.append({ college: '', qualification: '', gpa: '' })}>Add Education</button>
        </section>

        <h2 className='text-lg font-semibold'>Upload Document </h2>
        <section className='space-y-2'>
          <div className="grid">
          <label>Citizenship</label>
            <input type='file' accept='image/*' onChange={(e) => {handleUploadFile(e,'citizen')
            }} />
            {errors.citizen && <span className='text-xs text-red-500'>{errors.citizen.message}</span>}
            {preview.citizen && <img src={preview.citizen} alt="Citizenship Preview" className='w-16 h-16' />}
          </div>
          <div className="grid">
          <label>Profile</label>
            <input type='file' accept='image/*' 
            onChange={(e)=>{handleUploadFile(e,'profile')}}
             />
            {errors.profile && <span className='text-xs text-red-500'>{errors.profile.message}</span>}
            {preview.profile && <img src={preview.profile} alt="Profile Preview" className='w-16 h-16' />}
          </div>
        </section>

        <button type='submit' className='bg-blue-600 text-white'>Submit</button>
      </form>


    </div>
  )
}

export default SignupPage


